const { Usuario } = require('../models');

const perfilController = {
    index: async (request, response) => {

        const { id } = request.session.usuarioEncontrado;

        const user = await Usuario.findOne({
            where: {
                id
            },
            include:['Animal']
        });

        return response.render('perfil', {
            user,

        });
        // return response.json(user)
    },
};

module.exports = perfilController;