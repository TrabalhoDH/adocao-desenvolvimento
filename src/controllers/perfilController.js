const express = require("express");
const router = express.Router();
const fs = require('fs');



const perfilController = (request, response)=>{

    const novoArquivoUsuario = 'usuario.json';

    const usuarioArquivo = fs.readFileSync(novoArquivoUsuario);
    const usuario = JSON.parse(usuarioArquivo);

    response.render('perfil',{usuario})
};


module.exports = perfilController;