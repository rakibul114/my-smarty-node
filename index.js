const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from my over smarty Node');
});

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '0179999999' },
    { id: 2, name: 'Morjina', email: 'morjina@gmail.com', phone: '0179999999' },
    { id: 3, name: 'Shilpa', email: 'shilpa@gmail.com', phone: '0179999999' },
    { id: 4, name: 'Sokina', email: 'sokina@gmail.com', phone: '0179999999' },
    { id: 5, name: 'Meherunnesa', email: 'meherunnsa@gmail.com', phone: '0179999999' },
    { id: 6, name: 'Bilkis', email: 'bilkis@gmail.com', phone: '0179999999' },
    { id: 7, name: 'Ambia', email: 'ambia@gmail.com', phone: '0179999999' },
];

app.get('/users', (req, res) => {
    if (req.query.name) {
        const search = req.query.name.toLowerCase();
        const matched = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(matched);
    }
    else {        
        res.send(users);
    }
});

app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id == id);
    res.send(user);
});

app.post('/user', (req, res) => {
    console.log('request', req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'apple', 'oranges']);
});

app.get('/fruits/mango/fazli', (req, res) => {
    res.send('sour sour fazli flavor');
});

app.listen(port, () => {
    console.log('Listening to port', port);
});
