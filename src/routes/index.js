const express = require('express');
const mainController = require('../controllers/mainController');
const router = express.Router();


router.get('/',mainController);

router.get('/login',(req , res)=>{
    res.render('../views/login')
});

router.get('/feed',(req , res)=>{
    res.render('../views/feed')
});



module.exports = router;