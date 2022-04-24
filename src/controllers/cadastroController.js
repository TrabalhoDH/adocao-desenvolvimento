const fs = require('fs');
const { v4: uuid} = require('uuid');
const bcrypt = require('bcryptjs');
const {check, validationResult,body} =require('express-validator')


const cadastroController ={
    usuario: (request, response)=>{
    response.render('cadastro-pessoas')},

    novoUsuarios: (request,response)=>{
        const {senha} = request.body;
        const senhaC = bcrypt.hashSync(senha ,10);
        
        const novoArquivoUsuario = 'usuario.json';
        const usuarioArquivo = fs.readFileSync(novoArquivoUsuario);
        const usuarioJSON = JSON.parse(usuarioArquivo);

        const novoUsuario = {
            id: uuid(),
            ...request.body,
            senha : senhaC,
            fileName: request.file.filename
        }
        
        usuarioJSON.push(novoUsuario);
        
        fs.writeFileSync(novoArquivoUsuario, JSON.stringify(usuarioJSON));

        request.session.autorizado = true;
        request.session.usuarioEncontrado = novoUsuario;

        response.redirect('/perfil');
    }
};


module.exports = cadastroController