import { MongoClient } from 'mongodb';

export async function GET(req) {
  const client = new MongoClient(process.env.MONGODB_URI);

  try {
    await client.connect();
    const database = client.db('Flashcards');
    const documents = await database.collection('Flashcards').find().toArray();

    return new Response(JSON.stringify({ flashcards: documents }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error fetching flashcards:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch flashcards' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  } finally {
    await client.close();
  }
}