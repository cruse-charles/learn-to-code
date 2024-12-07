import React from 'react'
import FlashCard from '../components/FlashCard'
import { MongoClient } from 'mongodb';
import { getFlashcards } from '../../api/flashcards';


async function FlashcardPage() {
  // let flashcards

  const response = await fetch('http://localhost:3000/api/flashcards')
  const {flashcards} = await response.json()
  console.log('page file, retrieving flashcards', flashcards)
  // console.log(flashcards)  

          // const client = new MongoClient(process.env.MONGODB_URI)
  
    
          // async function run() {
          //   try {
          //     // Connect the client to the server	(optional starting in v4.7)
          //     await client.connect();
          //     // Send a ping to confirm a successful connection
          //     const database = await client.db("Flashcards");
          
          //     const document = await database.collection("Flashcards").find().toArray()
          //     flashcards = document
          //     console.log(document)
              
          //     // res.status(200).json({flashcards: document})
          //   } finally {
          //     // Ensures that the client will close when you finish/error
          //     await client.close();
          //   }
          // }
          // run().catch(console.dir);



      // const {flashcards} = getFlashcards()
      // console.log('after get flash', flashcards)

  return (
    <>
      {flashcards?.map((flashcard) => (
        <FlashCard key={flashcard._id} question={flashcard.question} answer={flashcard.answer}/>
      ))}
      {/* <div>Hello</div> */}
    </>
  )
}

export default FlashcardPage