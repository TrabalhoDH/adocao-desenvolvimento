const express = require('express');
const anuncioController = require('../controllers/feedController');
const router = express.Router();

router.get('/',anuncioController.show);

module.exports = router;