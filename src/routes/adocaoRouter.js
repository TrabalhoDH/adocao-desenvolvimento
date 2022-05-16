const express = require('express');
const adocaoController = require('../controllers/adocaoController');
const router = express.Router();

router.get('/',adocaoController.show);

module.exports = router;