const express = require('express');

const router =express.Router();

router.get('/usuario',(req , res)=>{
    res.render('../views/cadastro-pessoas')
});

router.get('/pet',(req , res)=>{
    res.render('../views/cadastro-pet')
});


module.exports= router;