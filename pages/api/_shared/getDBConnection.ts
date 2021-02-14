import { MongoClient, Db } from 'mongodb';
import { URL } from 'url';

let cachedDB: Db = null;

const getDBConnection = async (uri: string): Promise<Db> => {

  if (cachedDB) {
    return cachedDB;
  }
  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  const dbName = (new URL(uri)).pathname.substr(1);

  const db = client.db(dbName);

  cachedDB = db;

  return db;
}


export default getDBConnection;