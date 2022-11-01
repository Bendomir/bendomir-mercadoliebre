const express = require('express');
const app = express();
const path = require('path');
// let PORT = 3000

app.use(express.static('public'));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log('Fiesta, Carnaval en ' + PORT));

app.get('/', (req, res) => {

    res.sendFile(path.resolve('./views/index.html'));
});

app.get('/login', (req, res) => {

    res.sendFile(path.resolve('./views/login.html'));
});

app.get('/register', (req, res) => {

    res.sendFile(path.resolve('./views/register.html'));
});


