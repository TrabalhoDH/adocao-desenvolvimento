const { Usuario } = require('../models');
const { Animal } = require('../models');

const perfilController = {
    index: async (request, response) => {
        const { id } = request.session.usuarioEncontrado;

        const usuario = await Usuario.findOne({
            where: {
                id
            },
        });

        const animais = await Animal.findAll({
            where: {
                idUsuario: id
            },
            include: ['Fotos']
        });

        return response.render('perfil', {
            usuario,
            animais
        });
    },
};

module.exports = perfilController;