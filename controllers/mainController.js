const path = require('path');


const mainController = {

    index: (req, res) => {

        res.render('index', products);
    },

    login: (req, res) => {

        res.render(path.resolve('./views/login.ejs'));
    },

    register: (req, res) => {

        res.render(path.resolve('./views/register.ejs'));
    }


}

module.exports = mainController;


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