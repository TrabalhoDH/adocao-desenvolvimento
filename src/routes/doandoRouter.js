const express = require('express');
const multer = require('multer');

const storage = require('../config/multer');
const doandoController = require('../controllers/doandoController');
const cadastroPetValidator = require('../middlewares/cadastroPetValidator')

const router = express.Router();

const upload = multer({ storage: storage });

router.get('/pet', doandoController.pet);

router.post('/pet',upload.array('fotos',4),cadastroPetValidator,doandoController.novoAnimais);

router.put('/pet',doandoController.atualizar);

module.exports = router;