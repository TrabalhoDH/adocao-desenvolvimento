const express = require('express');
const router = express.Router;
const fs = require('fs');
const { v4: uuid} = require('uuid');


const cadastroController ={
    usuario: (request, response)=>{
    response.render('cadastro-pessoas')},
 
    pet : (request, response)=>{
    response.render('cadastro-pet')},

    novoUsuarios: (request,response)=>{
        const novoArquivoUsuario = 'usuario.json';

        const usuarioArquivo = fs.readFileSync(novoArquivoUsuario);
        const usuarioJSON = JSON.parse(usuarioArquivo);

        const novoUsuario = {
            id: uuid(),
            ...request.body
        }

        usuarioJSON.push(novoUsuario);

        console.log(request.body);
        console.log(novoUsuario);

        fs.writeFileSync(novoArquivoUsuario, JSON.stringify(usuarioJSON));
        
        response.render('perfil',{
            title: 'Express',
        });
    },
    novoAnimais:(request,response)=>{
        const novoArquivoAnimal = 'animais.json';

        const animalArquivo = fs.readFileSync(novoArquivoAnimal);
        const animalJSON = JSON.parse(animalArquivo);

        const novoAnimal = {
            id: uuid(),
            ...request.body
        }

        animalJSON.push(novoAnimal);

        console.log(request.body);
        console.log(novoAnimal);

        fs.writeFileSync(novoArquivoAnimal, JSON.stringify(animalJSON));
        
        response.render('perfil',{
            title: 'Express',
        });
    }
};


module.exports = cadastroController