// Importing the necessary modules
const express = require('express');
const axios = require('axios');

// Initializing the express app
const app = express();
const PORT = 3000;

app.get('/opa', (req, res) => {
  res.json({
    data: [
      { id: 7, name: 'Ana', position: 1 },
      { id: 8, name: 'Bia', position: 2 },
      { id: 9, name: 'Carlos', position: 3 }
    ],
    count: 30,
    skip: 0,
    limit: 3,
    status: 200
  });
});
// Endpoint for making a GET request to an external API
// app.get('/api/data', async (req, res) => {
//   try {
//     // Make a GET request to an external API
//     const resWithMessageImageUrl = await axios.get('https://dog.ceo/api/breeds/image/random');
//     console.log("🚀 ~ file: index.js:14 ~ app.get ~ response:", resWithMessageImageUrl)

//     const imageUrl = resWithMessageImageUrl.data.message

//     // Extract the data from the response
//     // const data = response.data;

//     // Set the appropriate content type for the image
//     res.send(`<img src="${imageUrl}">`);

//     // Send the image data as the response
    
//     // res.sendFile
//   } catch (error) {
//     // Handle any errors that may occur
//     console.error(error);
//     res.status(500).json({ error: 'Failed to fetch data from the external API' });
//   }
// });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});