const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();


router.get('/', mainController);

router.get('/login', (req, res) => {
    res.render('login')
});



module.exports = router;