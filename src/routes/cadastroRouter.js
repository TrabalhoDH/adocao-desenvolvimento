const express = require('express');
const multer = require('multer');

const storage = require('../config/multer');
const cadastroController = require('../controllers/cadastroController');
const router =express.Router();

const upload = multer({ storage });

router.get('/usuario',cadastroController.usuario);

router.get('/pet',cadastroController.pet);

router.post('/usuario',upload.single('fotoPerfil'),cadastroController.novoUsuarios);

router.post('/pet',cadastroController.novoAnimais);

module.exports= router;