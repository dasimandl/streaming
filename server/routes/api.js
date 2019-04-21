const express = require('express');
const router = express.Router();
const axios = require('axios');
const crypto = require('crypto');

const WSC_API_KEY = `${process.env.WSC_API_KEY}`;
const WSC_ACCESS_KEY = `${process.env.WSC_ACCESS_KEY}`;
const NODE_ENV = `${process.env.NODE_ENV}`;
const hostname = 'https://api.cloud.wowza.com';
const path = '/api/v1.3/live_streams';

var timestamp = Math.round(new Date().getTime() / 1000);
var hmacData = timestamp + ':' + path + ':' + WSC_API_KEY;
var signature = crypto
  .createHmac('sha256', WSC_API_KEY)
  .update(hmacData)
  .digest('hex');

const headers = {
  headers: {
    'wsc-access-key': WSC_ACCESS_KEY,
    'wsc-timestamp': timestamp,
    'wsc-signature': signature,
    'Content-Type': 'application/json'
  }
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'API' });
});
/* GET home chennel list. */
router.get('/channels', function(req, res, next) {
  console.log(`${hostname + path}`, headers);
  axios
    .get(`${hostname + path}`, headers)
    .then(({ data }) => {
      res.json(data);
    })
    .catch(err => console.error(err.response.data.meta));
});

module.exports = router;
