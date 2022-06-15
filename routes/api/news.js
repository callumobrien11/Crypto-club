const express = require('express')
const router = express.Router();
const newsCtrl = require('../../src/news');


router.get('/:tickers', newsCtrl.getNews)


module.exports = router;