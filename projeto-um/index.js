const express = require('express');
const fs = require('fs').promises;
const app = express();
const port = 3000;

let emails = {};

async function loadEmails() {
    try {
      const data = await fs.readFile('emails.json', 'utf-8');
  
      if (data.trim() === '') {
        console.error('Error loading emails: File is empty');
        return;
      }
  
      console.log('Data read from emails.json:', data);
  
      emails = JSON.parse(data);
    } catch (error) {
      if (error instanceof SyntaxError) {
        if (error.message.includes('Unexpected end of JSON input')) {
          console.error('Error loading emails: JSON file is incomplete or empty');
        } else {
          console.error('Error loading emails: Invalid JSON syntax');
        }
      } else {
        console.error('Error loading emails:', error.message);
      }
    }
  }
  

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota para obter todos os e-mails
app.get('/emails', (req, res) => {
  res.json(emails);
});

// Restante do código

loadEmails().then(() => {
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
});
