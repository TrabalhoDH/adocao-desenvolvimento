const { Animal, Anuncio, Foto } = require('../models');

const anuncioController = {
  show: async (request, response) => {
    const idAnimal = request.query.idAnimal;

    const animal = await Animal.findByPk(idAnimal);

    const foto = await Foto.findAll({
      where: {
        animal_id: idAnimal
      },
    });

    response.render('atualizar', {
      animal,
      foto
    });
  },

  finalizarAnuncio: async (request, response) => {
    const { id } = request.session.usuarioEncontrado;
    const { mensagem, idAnimal } = request.body;

    await Anuncio.create({
      mensagem,
      usuario_id: id,
      animal_id: idAnimal
    })

    return response.redirect('/perfil');
  }
}
module.exports = anuncioController;
