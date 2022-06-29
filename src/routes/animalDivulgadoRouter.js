const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const animalDivulgadoController = require('../controllers/animalDivulgadoController');
const router = express.Router();

router.get('/:id', animalDivulgadoController.show)

router.post('/', authMiddleware.auth, animalDivulgadoController.store)

module.exports = router;