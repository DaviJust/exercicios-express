// Importing the necessary modules
const express = require('express');
const axios = require('axios');

// Initializing the express app
const app = express();
const PORT = 3000;

// Endpoint for making a GET request to an external API
app.get('/api/data', async (req, res) => {
  try {
    // Make a GET request to an external API
    const response = await axios.get('https://dog.ceo/api/breeds/list/all', { responseType: 'arraybuffer' });

    // Extract the data from the response
    const data = response.data;

    // Set the appropriate content type for the image
    res.setHeader('Content-Type', 'image/jpeg');

    // Send the image data as the response
    res.status(200).send(data);
  } catch (error) {
    // Handle any errors that may occur
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data from the external API' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});