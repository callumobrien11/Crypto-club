const express = require('express')
const router = express.Router();
const newsCtrl = require('../../controllers/api/news')


router.get('/', newsCtrl.getNews)


module.exports = router;