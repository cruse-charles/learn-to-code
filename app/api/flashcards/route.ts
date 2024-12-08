import { getFlashcards } from '@/lib/mongo/flashcards';
import { MongoClient } from 'mongodb';

export async function GET() {
  // TODO: Add error handling for MongoDB connection
  // TODO: Add comments to explain the code
  const flashcards = await getFlashcards();
  return new Response(JSON.stringify({flashcards}), {
    status: 200,
  })
}