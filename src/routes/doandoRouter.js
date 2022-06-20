const express = require('express');
const multer = require('multer');

const storage = require('../config/multer');
const doandoController = require('../controllers/doandoController');
const cadastroPetValidator = require('../middlewares/cadastroPetValidator')
const {check,validationResult,body} = require('express-validator');

const router =express.Router();

const upload = multer({ storage: storage });

router.get('/pet',doandoController.pet);

router.post('/pet',upload.array('fotos',4),cadastroPetValidator,doandoController.novoAnimais);

module.exports= router;