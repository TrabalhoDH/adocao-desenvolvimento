const express = require('express');
const multer = require('multer');

const storage = require('../config/multer');
const doandoController = require('../controllers/doandoController');
const router =express.Router();

const upload = multer({ storage: storage });

router.get('/pet',doandoController.pet);

router.post('/pet',upload.single('fotoAnimais'),doandoController.novoAnimais);

module.exports= router;