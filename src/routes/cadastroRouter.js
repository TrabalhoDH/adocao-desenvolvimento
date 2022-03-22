const express = require('express');
const cadastroController = require('../controllers/cadastroController');

const router =express.Router();

router.get('/usuario',cadastroController.usuario);

router.get('/pet',cadastroController.pet);


module.exports= router;