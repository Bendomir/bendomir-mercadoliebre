const express = require('express');
const app = express();
const path = require('path');
const mainRouter = require ('./routers/mainRouter')

app.use(express.static('public'));

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

let PORT = process.env.PORT || 3000


app.listen(PORT, () => console.log('Fiesta, Carnaval en ' + PORT));



app.use('/', mainRouter)



let products = [
    {
        nombre:'Cafetera Moulinex' ,
        img:'images/img-cafetera-moulinex.jpg',
        precio:'$6.770',
        descuento: '40% OFF'
    },
    {
        nombre:'MacBook Pro 2019' ,
        img:'images/img-macbook-pro-2019.jpg',
        precio:'$230.000',
        descuento: '20% OFF'
    }
]
