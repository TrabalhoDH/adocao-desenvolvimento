const express = require('express');

const router =express.Router();

router.get('/usuario',(req , res)=>{
    res.render('../views/cadastro-pessoas')
});


module.exports= router;