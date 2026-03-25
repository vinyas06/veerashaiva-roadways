import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST allowed" });
  }

  const client = new MongoClient(uri);

  try {
    await client.connect();

    const db = client.db("fleetDB");

    const result = await db.collection("trips").insertOne(req.body);

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  } finally {
    await client.close();
  }
}