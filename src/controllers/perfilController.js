const { Usuario } = require('../models');
const { Animal } = require('../models');

const perfilController = {
    index: async (request, response) => {
        const { id } = request.session.usuarioEncontrado;
 
        const user = await Usuario.findOne({
            where: {
                id
            },
        });

        const animais = await Animal.findAll({
            where: {
                usuarios_id:id
            },
            include:['Fotos']
        });

        return response.render('perfil', {
            user,
            animais
        });

    },
};

module.exports = perfilController;