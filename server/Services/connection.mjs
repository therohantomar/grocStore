import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();
console.log(process.env.CONNECT_STRING);

export const connection = async () => {
  const client = new MongoClient(process.env.CONNECT_STRING, {
    useUnifiedTopology: true,
  });

  await client.connect();
  const db = client.db("your-database-name"); // Replace "your-database-name" with your actual database name
  return db;
};
