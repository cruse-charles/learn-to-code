import { NextResponse } from 'next/server';
import { getQuestion } from '@/lib/mongo/dsa';

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');

    try {
        const question = await getQuestion(title as string);

        if (!question) {
            return NextResponse.json({ error: 'Question not found' }, { status: 404 });
        }

        return NextResponse.json(question, { status: 200 });
    } catch (error) {
        console.error('Error fetching question:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
