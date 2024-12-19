import { NextResponse } from 'next/server';
import { getAllQuestions } from '@/lib/mongo/dsa';

export async function GET() {
    try {
        const questions = await getAllQuestions();
        return NextResponse.json(questions, { status: 200 });
    } catch (error) {
        console.error('Error fetching questions:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}