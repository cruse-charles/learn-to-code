import { NextResponse } from 'next/server';
import { getQuestion } from '@/lib/mongo/dsa';

export async function GET(req: Request) {
    // Parse the request URL to extract query parameters and get 'title' from the url
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');

    try {
        // Fetch the question from the database using the title
        const question = await getQuestion(title as string);

        // If no question is found, return a 404 response with an error message
        if (!question) {
            return NextResponse.json({ error: 'Question not found' }, { status: 404 });
        }

        // If the question is found, return it as a JSON response with a 200 status
        return NextResponse.json(question, { status: 200 });
    } catch (error) {
        console.error('Error fetching question:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
