const express = require('express')
const router = express.Router();
const exchangesCtrl = require('../../controllers/api/exchanges')


router.get('/', exchangesCtrl.getExchanges)


module.exports = router;