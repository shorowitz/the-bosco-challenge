'use strict'

const express = require('express');
const photos = express.Router();
const request = require('request');
const dotenv = require('dotenv');
dotenv.load();

photos.get('/', getAssets, (req, res) => {
  console.log('got photos')
  res.send(res.data)
})

function getAssets (req, result, next) {
  request.get({url : 'http://api.thebos.co/v1/clients/events/assets/2308'}, function(error, response, body) {
    var bos = JSON.parse(body);
    var data = [];
      for (var i = 0; i < bos.assets.length; i++) {
        if (bos.assets[i].assets[0].type === 'raw' && bos.assets[i].assets[0].active === true) {
          var obj = {
            code: bos.assets[i].code,
            small: bos.assets[i].assets[0].urlTiny,
            med: bos.assets[i].assets[0].urlBig,
            normal: bos.assets[i].assets[0].url
          }
        data.push(obj)
        }
      }
    result.data = data;
    next();
  })
};

module.exports = photos;
