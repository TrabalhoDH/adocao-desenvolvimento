const express = require('express');
const multer = require('multer');

const storage = require('../config/multer');
const usuariosController = require('../controllers/usuariosController');
const usuariosValidator = require('../validators/usuariosValidator')
const router = express.Router();

const upload = multer({ storage });

router.get('/', usuariosController.usuario);

router.post('/', upload.single('fotoPerfil'), usuariosValidator.store, usuariosController.novoUsuarios);

module.exports = router;