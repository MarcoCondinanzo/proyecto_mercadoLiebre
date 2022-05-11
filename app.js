const express = require('express');
const app = express();
const path = require('path');
require('dotenv').config();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
const port= process.env.PORT || 3000; 

app.listen( port , () => {
    console.log('Servidor funcionando');
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/home.html');
});