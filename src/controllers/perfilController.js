const express = require("express");
const router = express.Router();



const perfilController = (request, response)=>{
    response.render('perfil')
};


module.exports = perfilController;