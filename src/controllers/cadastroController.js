const fs = require('fs');
const { v4: uuid} = require('uuid');


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
    },

    pet : (request, response)=>{
    response.render('cadastro-pet')},

    novoAnimais:(request,response)=>{
        const novoArquivoAnimal = 'animais.json';

        const animalArquivo = fs.readFileSync(novoArquivoAnimal);
        const animalJSON = JSON.parse(animalArquivo);

        const novoAnimal = {
            id: uuid(),
            ...request.body,
        
        }

        animalJSON.push(novoAnimal);

        fs.writeFileSync(novoArquivoAnimal, JSON.stringify(animalJSON));
        
        response.redirect('/perfil');
    }
};


module.exports = cadastroController