import express from 'express';
import { MongoClient, ObjectId } from "mongodb";
import uri from "./atlas_uri.js";
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());

const client = new MongoClient(uri)
const dbname = "MegaUnited"

async function connectToDatabase(){
    if(!client.topology || !client.topology.isConnected()){

        await client.connect();
    }
    return client.db(dbname);
}

app.get('/api/data', async (req, res) => {
    try {
        const db = await connectToDatabase();
        const items = await db.collection('Projects').find({}).toArray();
        res.json(items);
    } catch (err){
        res.status(500).json({ error: err.message});
    }
});

app.get('/api/data/:id', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const item = await db.collection('Projects').findOne(
      { _id: new ObjectId(req.params.id) }
    );
    if (!item) return res.status(404).json({ error: 'Not found' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});

// const connectToDatabase = async () => {
//     try {
//         await client.connect();
//         console.log(`Connected to the ${dbname} database`);

//     } catch(err) {
//         console.error(`Error connecting to the database: ${err}`);
//     }
// };

// const main = async () => {
//     try {
//         await connectToDatabase();
//     } catch (err){
//         console.error(`Error connecting to the database: ${err}`);
//     } 
//     finally {
//         await client.close();
//     }
// };

// main();