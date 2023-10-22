const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3001;

// Define a list of inspirational quotes (you can replace this with your own list).
const inspirationalQuotes = [
  'You did not come this far to come ONLY this far!-Move forward!',
  'The mind alone is one's friend and enemy at the same time.',
  'Believe you can and you’re halfway there.',
  'You are never too old to set another goal or dream a new dream',
  'Have patience- all things are difficult before they become easy.',
  'As you believe, so you become.',
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
