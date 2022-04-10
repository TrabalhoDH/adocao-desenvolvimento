const express = require('express');
const multer = require('multer');

const storage = require('../config/multer');
const cadastroController = require('../controllers/cadastroController');
const cadastroUserValidator = require('../../middlewares/cadastroUserValidator')
const {check,validationResult,body} = require('express-validator');
const router =express.Router();

const upload = multer({ storage });

router.get('/usuario',cadastroController.usuario);

router.post('/usuario',upload.single('fotoPerfil'),cadastroUserValidator,cadastroController.novoUsuarios);

module.exports= router;