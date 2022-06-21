const { Usuario } = require('../models')
const bcrypt = require('bcryptjs');


const loginController = {
    login: (request, response) => {
        response.render('login');
    },
    logar: async (request, response) => {
        const { email, senha } = request.body;

        const usuarioEncontrado = await Usuario.findOne({
            where: {
                email
            },
        });

        if (!usuarioEncontrado) {
            return response.status(401).render('login');
        };

        const ehSenhaCorreta = bcrypt.compareSync(senha, usuarioEncontrado.senha);

        if (!ehSenhaCorreta) {
            return response.status(401).render('login');
        };

        request.session.autorizado = true;
        request.session.usuarioEncontrado = usuarioEncontrado;

        return response.redirect('/perfil');
    }
};

module.exports = loginController;