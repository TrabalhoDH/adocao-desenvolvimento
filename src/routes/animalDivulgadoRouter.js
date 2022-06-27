const express = require('express');
const animalDivulgadoContrller = require('../controllers/animalDivulgadoController');
const router = express.Router();

router.get('/:id', animalDivulgadoContrller.show)

module.exports = router;