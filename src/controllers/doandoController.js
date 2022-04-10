const fs = require('fs');
const { v4: uuid} = require('uuid');


const doandoController ={
    pet : (request, response)=>{
    response.render('cadastro-pet')},

    novoAnimais:(request,response)=>{
        const novoArquivoAnimal = 'animais.json';

        const animalArquivo = fs.readFileSync(novoArquivoAnimal);
        const animalJSON = JSON.parse(animalArquivo);
        console.log(request)

        const novoAnimal = {
            id: uuid(),
            ...request.body,
            fileName:request.file.filename
        }

        animalJSON.push(novoAnimal);

        fs.writeFileSync(novoArquivoAnimal, JSON.stringify(animalJSON));
        
        response.redirect('/perfil');
    }
};


module.exports = doandoController