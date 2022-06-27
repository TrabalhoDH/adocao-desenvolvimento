const { info } = require('console');
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
    request.session.autorizado = true;

    response.render('atualizar', {
      animal,
      foto
    });
  },

  finalizarAnuncio: async (request, response) => {
    const { idAnimal } = request.params;
    const { idUsuario } = request.body;

    const anuncio = await Anuncio.findOne({
      where: {
        idAnimal
      }
    })

    if (!anuncio) {
      await Anuncio.create({
        idUsuario,
        idAnimal
      })
    }
    request.session.autorizado = true;
    return response.redirect('/perfil');
  },

  delete: async (request, response) => {
    const { id } = request.params

    await Anuncio.destroy({
        where: {
            idAnimal: id
        }
    })

    request.session.autorizado = true;
    response.redirect('/perfil')
}
}
module.exports = anuncioController;
