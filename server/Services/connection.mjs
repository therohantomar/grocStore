import { MongoClient } from "mongodb";
import { config } from "dotenv";

config();

export const connection = async () => {
  const client = new MongoClient(process.env.CONNECTION_STRING, {});

  const connection = await client.connect();

  return connection;
};
