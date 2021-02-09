import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next'

const getToken = async (code:string|undefined) => {
  const {data} = await axios.post('https://github.com/login/oauth/access_token',
  {
    client_id: '8476fa9bb3e9618ad84f',
    client_secret: '3401c2ad4deac657384c94c27ea6e9fc680a9520',
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
    response.status(200).json({
      userData
    });
  } catch (error) {
    response.status(500).json({
      message: error.toString()
    });
  }
}


export default handle;