const express = require('express');
const anuncioController = require('../controllers/anuncioController');
const router = express.Router();

router.get('/', anuncioController.anunciarAnimal);
router.post('/', anuncioController.finalizarAnuncio);
module.exports = router;