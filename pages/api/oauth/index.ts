import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'
import {MongoClient, Db} from 'mongodb';
import  {URL}  from 'url';

let cachedDB:Db = null;

const getDBConnection  = async (uri:string) => {

  if(cachedDB){
    return cachedDB;
  }
  const client  = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology:true
  });

  const dbName = (new URL(uri)).pathname.substr(1);

  const db =  client.db(dbName);

  cachedDB = db;

  return db;
}

const getToken = async (code:string|undefined) => {
  const {data} = await axios.post('https://github.com/login/oauth/access_token',
  {
    client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    code
  },
  {
    headers: {
      accept: "application/vnd.github.v3+json"
    }
  });

  const token = data.access_token;

  return token;
}

const getUserData = async (token) => {

  const {data} = await axios.get('https://api.github.com/user',{
    headers: {
      accept:'application/vnd.github.v3+json',
      authorization:`token ${token}`
    }
  });

  const userData = {
    gitHubId:data.id,
    name:data.name,
    username: data.login,
    avatar: data.avatar_url
  }

  return userData;
}


const handle = async (request:NextApiRequest, response:NextApiResponse) => {
  try {
    const code =  request.query.code as string; 
    const token  = await getToken(code);
    const userData = await getUserData(token);

    const db =  await getDBConnection(process.env.MONGODB_URI);

    const collection = db.collection('users');

    const query = {
      gitHubId: userData.gitHubId
    }

    const update = {
      $set: userData
    }

    const options = {
      upsert: true 
    };

    const result = await collection.updateOne(query, update, options);

    response.status(200).json({
      result: result.result
    });
  } catch (error) {
    console.log("🐛 ~ file: index.ts ~ line 96 ~ handle ~ error", error)
    response.status(500).json({
      message: error.toString()
    });
  }
}


export default handle;