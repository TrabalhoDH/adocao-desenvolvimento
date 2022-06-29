const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const animalDivulgadoContrller = require('../controllers/animalDivulgadoController');
const router = express.Router();

router.get('/:id', animalDivulgadoContrller.show)

router.post('/', authMiddleware.auth, animalDivulgadoContrller.store)

module.exports = router;