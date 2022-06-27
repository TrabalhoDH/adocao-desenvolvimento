const express = require('express');
const loginController = require('../controllers/loginController');
const router = express.Router();

router.get('/', loginController.login);
router.post('/', loginController.logar);
router.get('/logout', loginController.logout)

module.exports = router;