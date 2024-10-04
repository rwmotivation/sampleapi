# prompt: create an API that retrieves data from a database and displays it on a web page, follow these steps. This example demonstrates how to create a simple REST API using Node.js and Express.js to retrieve data from a database (like MongoDB or MySQL) and display it on a webpage using HTML.

// Assuming you have a database connection set up (e.g., MongoDB)
// const MongoClient = require('mongodb').MongoClient;
// const url = 'mongodb://localhost:27017';
// const dbName = 'mydatabase';

// async function getDataFromDatabase() {
//   const client = await MongoClient.connect(url);
//   const db = client.db(dbName);
//   const collection = db.collection('mycollection');
//   const data = await collection.find({}).toArray();
//   client.close();
//   return data;
// }


// You will need to install Express.js: npm install express
const express = require('express');
const app = express();
const port = 3000;

// Serve static files (HTML, CSS, JavaScript) from the 'public' directory
app.use(express.static('public'));

// API endpoint to retrieve data
app.get('/api/data', async (req, res) => {
  try {
    // Replace this with your actual data retrieval logic
    // const data = await getDataFromDatabase(); 

    // Example data:
    const data = [
      { id: 1, name: 'Item 1', description: 'Description 1' },
      { id: 2, name: 'Item 2', description: 'Description 2' },
    ];

    res.json(data);
  } catch (error) {
    console.error('Error retrieving data:', error);
    res.status(500).json({ error: 'Failed to retrieve data' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Create a file named index.html in the 'public' directory
// <!DOCTYPE html>
// <html>
// <head>
//   <title>My Web Page</title>
// </head>
// <body>
//   <h1>Data from API</h1>
//   <ul id="data-list"></ul>
//   <script>
//     fetch('/api/data')
//       .then(response => response.json())
//       .then(data => {
//         const dataList = document.getElementById('data-list');
//         data.forEach(item => {
//           const listItem = document.createElement('li');
//           listItem.textContent = `ID: ${item.id}, Name: ${item.name}, Description: ${item.description}`;
//           dataList.appendChild(listItem);
//         });
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   </script>
// </body>
// </html> 
