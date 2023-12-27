// db.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://anchalgupta:36zmDEkMIapyaf46@cluster0.wskoljz.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectDatabase() {
  await client.connect();
  console.log("client", client);
  return { client, db: client.db() }; // Resolve the promise with the client and db
}
    