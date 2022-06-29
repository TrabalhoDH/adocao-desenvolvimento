const { Usuario } = require('../models')

const atualizarController = {

    show: async (request, response) => {
        const idUser = request.params.id;

        const usuario = await Usuario.findByPk(idUser);

        request.session.autorizado = true;
            
        response.render('atualizarUsuario', {
            usuario
        });
    },
    
}

module.exports = atualizarController;