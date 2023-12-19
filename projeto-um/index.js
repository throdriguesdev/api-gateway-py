const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/emails', async (req, res) => {
  try {
    const data = await fs.readFile('emails.json', 'utf-8');
    const emails = JSON.parse(data);
    res.json(emails);
  } catch (error) {
    console.error('Error loading emails:', error);
    res.status(500).send('Error loading emails');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});