const { Usuario } = require('../models');

const perfilController = {
    index: async (request, response) => {

        const { id } = request.session.usuarioEncontrado;

        const user = await Usuario.findOne({
            where: {
                id
            },
            include:['anuncios']
        });
        
        return response.render('perfil', {
            user,
        });
    },
};

module.exports = perfilController;