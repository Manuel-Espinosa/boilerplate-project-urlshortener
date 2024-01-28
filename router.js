const express = require('express');
const router = express.Router();
const controllers = require('./controllers');

router.post('/api/shorturl', controllers.shortenUrl);

router.get('/api/shorturl/:shortUrl', controllers.redirectToOriginalUrl);

module.exports = router;
