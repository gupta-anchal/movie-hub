// add.js
import { connectDatabase } from '../../../../db/db';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { title, publishingYear } = req.body;

  // Validation: Check if title and publishingYear are provided

  try {
    // Connect to MongoDB using the correct function name
    console.log("connectDatabase", connectDatabase());
    const { db } = await connectDatabase();
    console.log("db", db);

    // Insert the new movie entry
    const result = await db.collection('movies').insertOne({
      title,
      publishingYear: parseInt(publishingYear),
      // Add other fields as needed
    });

    res.status(200).json({ message: 'Movie added successfully', movie: result.ops[0] });
  } catch (error) {
    console.error('Error connecting to the database:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
