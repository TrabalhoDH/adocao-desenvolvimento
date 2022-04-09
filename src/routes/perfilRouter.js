const express = require('express');
const perfilController = require('../controllers/perfilController');

const router = express.Router();


router.get('/',perfilController);

module.exports = router;