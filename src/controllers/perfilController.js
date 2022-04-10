const express = require("express");
const router = express.Router();
const fs = require('fs');




const perfilController = (request, response)=>{

    const novoArquivoUsuario = 'usuario.json';
    const novoArquivoAnimal = 'animais.json';

    const usuarioArquivo = fs.readFileSync(novoArquivoUsuario);

    const animalArquivo = fs.readFileSync(novoArquivoAnimal);
    
    const usuario = JSON.parse(usuarioArquivo);
    
    const animal = JSON.parse(animalArquivo);

    response.render('perfil',{
        usuario,
        animal
    })
};


module.exports = perfilController;