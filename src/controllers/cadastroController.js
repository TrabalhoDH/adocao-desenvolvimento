const express = require('express');
const router = express.Router;


const cadastroController ={
    usuario: (request, response)=>{
    response.render('cadastro-pessoas')},
 
    pet : (request, response)=>{
    response.render('cadastro-pet')}
};


module.exports = cadastroController;