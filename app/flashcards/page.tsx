import React from 'react'
import { MongoClient } from 'mongodb';


import FlashCard from '../components/FlashCard'

const client = new MongoClient(process.env.MONGODB_URI)

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const database = await client.db("Flashcards");

    const documents = await database.collection("Flashcards").find().toArray()
    
    console.log(documents);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


const page = () => {
  return (
    <>
      <FlashCard />
    </>
  )
}

export default page