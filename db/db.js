// db.js
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://anchalgupta:36zmDEkMIapyaf46@cluster0.wskoljz.mongodb.net/?retryWrites=true&w=majority'; // Replace with your actual connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export async function connectDatabase() {
  await client.connect();
  return client.db();
}
