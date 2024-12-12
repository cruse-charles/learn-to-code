import { getFlashcards } from '@/lib/mongo/flashcards';

export async function GET() {
  try{
    // fetch flashcards from the database and return them as a JSON response
    const flashcards = await getFlashcards();
    return new Response(JSON.stringify(flashcards), {
      status: 200,
    })
  } catch (error) {
    // log and return an error if fetch fails
    console.error('Error fetching flashcards:', error);
    return new Response(JSON.stringify({error: 'Failed to fetch flashcards'}), {
      status: 500,
    }
  )}
}