import { MongoClient } from 'mongodb';

export async function getFlashcards() {
  const client = new MongoClient(process.env.MONGODB_URI as string);

  try {
    // Connect the client to the server
    await client.connect();
    
    // Fetch documents from the 'learn_2_code' database, 'flashcards' collection and convert them to an array
    const database = client.db('learn_2_code');
    const documents = await database.collection('flashcards').find().toArray();

    return documents;
  } catch (error) {
    console.error('Error retrieving flashcards from database:', error);
    throw new Error('Failed to fetch flashcards from database');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}