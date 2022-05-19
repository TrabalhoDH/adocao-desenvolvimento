const fs = require('fs');
const { v4: uuid} = require('uuid');
const {Animal} = require('../models');
const {Usuario} = require ('../models');


const doandoController ={
    pet : (request, response)=>{
    response.render('cadastro-pet')},
    

    novoAnimais: async (request,response)=>{
        const {tipoDePet,raca,tamanhoDoPet,genero,idade,corPredominante,pelagem,maisInformacoes} = request.body;
   
        const { id } = request.session.usuarioEncontrado;
        
        const animal = await Animal.create({
           raca:raca,
           porte:tamanhoDoPet,
           cor:corPredominante,
           tipo:tipoDePet,
           genero:genero,
           idade:idade,
           imagem: request.file.filename,
           pelagem:pelagem,
           infoExtra:maisInformacoes,
           usuarios_id: id,
           criado_em:`${new Date()}`
        })
        

        console.log(animal.id)
        
        request.session.autorizado = true;
        response.redirect('/perfil');
    }
}; module.exports = doandoController

/*         const novoArquivoAnimal = 'animais.json';

        const animalArquivo = fs.readFileSync(novoArquivoAnimal);
        const animalJSON = JSON.parse(animalArquivo);


        const novoAnimal = {
            id: uuid(),
            ...request.body,
            fileName:request.file.filename
        }

        animalJSON.push(novoAnimal);

        fs.writeFileSync(novoArquivoAnimal, JSON.stringify(animalJSON)); */