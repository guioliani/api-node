'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

//conecta ao banco

mongoose.connect('mongodb://<dbuser>:<dbpassword>@ds117913.mlab.com:17913/apinode');

//carrega os models
const Product = require('./models/productModel');

//carregar as rotas
const indexRoute = require('./routes/indexRoute');
const productRoute = require('./routes/productRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', indexRoute);
app.use('/products', productRoute);

module.exports = app;