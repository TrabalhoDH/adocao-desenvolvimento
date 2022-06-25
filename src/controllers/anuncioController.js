const { Animal, Anuncio, Foto } = require('../models');

const anuncioController = {
  show: async (request, response) => {
    const idAnimal = request.query.idAnimal;

    const animal = await Animal.findByPk(idAnimal);

    const foto = await Foto.findAll({
      where: {
        idAnimal
      },
    });
    request.session.usuarioEncontrado = true;
    response.render('atualizar', {
      animal,
      foto
    });
  },

  finalizarAnuncio: async (request, response) => {
    const { id } = request.session.usuarioEncontrado;
    const { mensagem, idAnimal } = request.body;


    const anuncio = await Anuncio.findOne({
      where: {
        idAnimal
      }
    });

    if (anuncio == undefined) {
      await Anuncio.create({
        mensagem,
        idUsuario: id,
        idAnimal
      })
      response.redirect('/perfil');
    } else {
      response.render('perfil',{
      })
    }
    request.session.usuarioEncontrado = true;
  },
}
module.exports = anuncioController;
