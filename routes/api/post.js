const express = require('express')
const router = express.Router();
const postCtrl = require('../../controllers/api/post');


router.post('/new', postCtrl.create)

router.get('/all', postCtrl.index)


module.exports = router;