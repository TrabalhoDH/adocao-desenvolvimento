const express = require('express');
const anuncioController = require('../controllers/anuncioController');
const router = express.Router();

router.get('/', anuncioController.show);
router.post('/:idAnimal', anuncioController.finalizarAnuncio);
router.delete('/:id', anuncioController.delete);


module.exports = router;