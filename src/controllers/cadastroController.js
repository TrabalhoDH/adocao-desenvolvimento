const fs = require('fs');
const { v4: uuid} = require('uuid');
const {check, validationResult,body} =require('express-validator')


const cadastroController ={
    usuario: (request, response)=>{
    response.render('cadastro-pessoas')},

    novoUsuarios: (request,response)=>{
        const novoArquivoUsuario = 'usuario.json';

        const usuarioArquivo = fs.readFileSync(novoArquivoUsuario);
        const usuarioJSON = JSON.parse(usuarioArquivo);

        const novoUsuario = {
            id: uuid(),
            ...request.body,
            fileName: request.file.filename
        }
        
        usuarioJSON.push(novoUsuario);
        
        fs.writeFileSync(novoArquivoUsuario, JSON.stringify(usuarioJSON));
        
        response.redirect('/perfil');
    }
};


module.exports = cadastroController