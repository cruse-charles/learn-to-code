import { MongoClient } from 'mongodb';

export async function getQuestion(title: string) {
    const client = new MongoClient(process.env.MONGODB_URI as string);

    try {
        // Connect the client to the server
        await client.connect();

        // Fetch document from the 'learn_2_code' database, 'dsa' collection
        const database = client.db('learn_2_code');
        const document = await database.collection('dsa_problems').findOne({title})

        return document;
    } catch (error) {
        console.error('Error retrieving question from database:', error);
        throw new Error('Failed to fetch question from database');
    }finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
}