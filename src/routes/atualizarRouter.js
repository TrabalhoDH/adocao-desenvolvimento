const express = require('express');
const atualizarController = require('../controllers/atualizarController');
const usuariosValidator = require('../validators/usuariosValidator')

const router = express.Router();

router.get('/usuario/:id',atualizarController.show)

module.exports = router;