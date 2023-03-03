import { MongoClient } from "mongodb";

const connectionString = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/graphql`;

export const client = new MongoClient(connectionString);