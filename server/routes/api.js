const express = require('express');
const router = express.Router();
const axios = require('axios');
const crypto = require('crypto');

const WSC_API_KEY = `${process.env.WSC_API_KEY}`;
const WSC_ACCESS_KEY = `${process.env.WSC_ACCESS_KEY}`;
// const WSC_API_KEY = `${process.env.SANDBOX_WSC_API_KEY}`;
// const WSC_ACCESS_KEY = `${process.env.SANDBOX_WSC_ACCESS_KEY}`;
const hostname = 'https://api.cloud.wowza.com';
// const hostname = 'https://api-sandbox.cloud.wowza.com';
const basePath = '/api/v1.3/live_streams';

const buildURLConfig = path => {
  const timestamp = Math.round(new Date().getTime() / 1000);
  const hmacData = timestamp + ':' + path + ':' + WSC_API_KEY;
  const signature = crypto
    .createHmac('sha256', WSC_API_KEY)
    .update(hmacData)
    .digest('hex');
  return {
    path,
    headers: {
      'wsc-access-key': WSC_ACCESS_KEY,
      'wsc-timestamp': timestamp,
      'wsc-signature': signature,
      'Content-Type': 'application/json',
    }
  };
};

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'API' });
});
/* GET live streams. */
router.get('/live-streams', function(req, res, next) {
  const { headers, path } = buildURLConfig(basePath);
  axios
    .get(`${hostname + path}`, { headers })
    .then(({ data }) => {
      res.json(data);
    })
    .catch(err => {
      console.error(err.response.data.meta);
      next(err);
    });
});

router.get(`/live-streams/:id`, (req, res, next) => {
  const { id } = req.params;
  const { headers, path } = buildURLConfig(`${basePath}/${id}`);
  axios
    .get(`${hostname + path}`, { headers })
    .then(({ data }) => {
      res.json(data);
    })
    .catch(err => {
      console.error(err.response.data.meta);
      next(err);
    });
});

module.exports = router;
