const {Animal} = require('../models');
const {Anuncio} = require('../models')

const anuncioController = { 
  
  
  anunciarAnimal: async (request,response)=>{
    const animalSelecionado = request.query.animal;
    const buscarAnimal = await Animal.findByPk(animalSelecionado);
      response.render('anuncio',{
        buscarAnimal,
    });
},
  finalizarAnuncio: async (request, response) =>{ 
      const {id} = request.session.usuarioEncontrado; 
      const {mensagem, animal} = request.body;
      const anunciarAnimal = await Anuncio.create({
        mensagem,
        usuario_id:id,
        animal_id:animal
      })
      return response.redirect('/feed');
      //console.log(anunciarAnimal)
    }
  }
module.exports = anuncioController;
