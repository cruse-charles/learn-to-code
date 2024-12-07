import { MongoClient } from 'mongodb';


// function handler (req, res) {
//     console.log('within handler')
//     if (req.method === 'GET') {
//         const client = new MongoClient(process.env.MONGODB_URI)

  
//         async function run() {
//           try {
//             // Connect the client to the server	(optional starting in v4.7)
//             await client.connect();
//             // Send a ping to confirm a successful connection
//             const database = await client.db("Flashcards");
        
//             const document = await database.collection("Flashcards").find().toArray()
//             console.log(document)
            
//             return res.status(200).json({flashcards: document})
//           } finally {
//             // Ensures that the client will close when you finish/error
//             await client.close();
//           }
//         }
//         run().catch(console.dir);
//     }
// }

// export default handler


export async function getFlashcards () {
    const client = new MongoClient(process.env.MONGODB_URI)

    async function run() {
      try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();
        // Send a ping to confirm a successful connection
        const database = await client.db("Flashcards");
    
        const document = await database.collection("Flashcards").find().toArray()
        // console.log(document)
        
        return {flashcards: document}
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
    }
    run().catch(console.dir);
}

const handler = async (req, res) => {
    // console.log('within handler')
    if (req.method === 'GET') {
        try {
            const {flashcards} = await getFlashcards()
            return res.status(200).json({flashcards: flashcards})
        } catch {
            console.log('error in handler')
            return res.status(500).json({error: 'Error fetching flashcards'})
        }
    }
}

export default handler