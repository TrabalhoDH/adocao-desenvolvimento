const fs = require('fs');
const { v4: uuid} = require('uuid');
const {Animal} = require('../models')


const doandoController ={
    pet : (request, response)=>{
    response.render('cadastro-pet')},

    novoAnimais: async (request,response)=>{
        const {tipoDePet,raca,tamanhoDoPet,genero,idade,corPredominante,pelagem} = request.body;
        
        const animal = await Animal.create({
           raca:raca,
           porte:tamanhoDoPet,
           cor:corPredominante,
           criado_em:`${new Date()}`
        })
        console.log(animal)
        request.session.autorizado = true;
        response.redirect('/perfil');
    }
};


module.exports = doandoController

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