const express = require('express');
const app = express();
const port = 3000;

let emails = {
    1: "email1@example.com",
    2: "email2@example.com",
    3: "email4@example.com"
};

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Remova a rota '/emails'
// app.post('/emails', (req, res) => {
//     const email = req.body.email;
//     const id = Object.keys(emails).length + 1;
//     emails[id] = email;
//     res.json({ id, email });
// });

// Remova a rota '/emails/:email'
// app.delete('/emails/:email', (req, res) => {
//     const emailToDelete = req.params.email;
//     const id = Object.keys(emails).find(key => emails[key] === emailToDelete);
//     if (id) {
//         delete emails[id];
//         res.json({ message: 'Email deleted' });
//     } else {
//         res.status(404).send('Email not found');
//     }
// });

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});