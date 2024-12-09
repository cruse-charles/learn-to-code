import { MongoClient } from 'mongodb';

export async function getQuestion(title) {
    const client = new MongoClient(process.env.MONGODB_URI as string);

    try {
        await client.connect();

        const database = client.db('Flashcards');
        const document = await database.collection('DSA-Problems').findOne({title})

        return document;
    } catch (error) {
        console.error('Error retrieving question from database:', error);
        throw new Error('Failed to fetch question from database');
    }
    // } finally {
    //     await client.close();
    // }
}