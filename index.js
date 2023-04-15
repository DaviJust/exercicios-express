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
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');

    // Extract the data from the response
    const data = response.data;

    // Send the data as the API response
    res.status(200).json(data);
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