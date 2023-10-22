const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

// Define a list of inspirational quotes (you can replace this with your own list).
const inspirationalQuotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Don’t watch the clock; do what it does. Keep going. - Sam Levenson',
  'Believe you can and you’re halfway there. -Theodore Roosevelt',
  'The future belongs to those who believe in the beauty of their dreams. -Eleanor Roosevelt',
  'The best way to predict the future is to create it. - Peter Drucker',
];

// Endpoint to get a random inspirational quote.
app.get('/get-quote', (req, res) => {
  const randomIndex = Math.floor(Math.random() * inspirationalQuotes.length);
  const randomQuote = inspirationalQuotes[randomIndex];
  res.json({ quote: randomQuote });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/get-quote`);
});
