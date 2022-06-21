const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');
const perfilController = require('../controllers/perfilController');

const router = express.Router();

router.get('/', authMiddleware.auth, perfilController.index);

module.exports = router;