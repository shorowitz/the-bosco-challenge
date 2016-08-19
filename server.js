'use strict'

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const _port = process.argv[2] || process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(logger('dev'));

const photosRoute = require('./routes/photos');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/photos', photosRoute);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'public/index.html'))
})

app.listen(_port, function(){
  console.log('Serving running on ' +_port);
});
