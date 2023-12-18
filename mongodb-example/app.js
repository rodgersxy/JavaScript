// Import the MongoDB client
const { MongoClient } = require('mongodb');

// MongoDB connection URI
const uri = 'mongodb://localhost:27017';

// Create a new MongoDB client
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to run the MongoDB code
async function run() {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Specify the database and collection
    const database = client.db('mydatabase');
    const collection = database.collection('mycollection');

    // Insert a document into the collection
    const insertResult = await collection.insertOne({ name: 'John Doe', age: 30 });
    console.log('Document inserted:', insertResult.insertedId);

    // Query the collection to retrieve the inserted document
    const queryResult = await collection.findOne({ _id: insertResult.insertedId });
    console.log('Queried Document:', queryResult);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

// Run the MongoDB code
run().catch(console.error);
