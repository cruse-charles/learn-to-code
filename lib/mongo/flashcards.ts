import { MongoClient } from 'mongodb';

export async function getFlashcards() {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    
    // Send a ping to confirm a successful connection
    const database = client.db('Flashcards');
    const documents = await database.collection('Flashcards').find().toArray();

    return documents;
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    throw new Error('Failed to fetch flashcards');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}