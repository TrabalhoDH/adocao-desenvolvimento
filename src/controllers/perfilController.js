const express = require("express");
const router = express.Router();



const perfilController = 
 router.get('/',(request, response)=>{
    response.render('perfil')
});


module.exports = perfilController;