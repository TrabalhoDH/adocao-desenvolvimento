const express = require('express');
const multer = require('multer');

const storage = require('../config/multer');
const petsController = require('../controllers/petsController');
const petsValidator = require('../validators/petsValidator')

const router = express.Router();

const upload = multer({ storage: storage });

router.get('/', petsController.index);
router.post('/', upload.array('fotos', 4), petsValidator.store, petsController.store);
router.put('/:idAnimal', petsController.update);

module.exports = router;