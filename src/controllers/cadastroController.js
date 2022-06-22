const bcrypt = require('bcryptjs');
const { Usuario } = require('../models')

const cadastroController = {
    usuario: (_, response) => {
        response.render('cadastro-pessoas')
    },

    novoUsuarios: async (request, response) => {
        const { nome, senha, cpf, email, genero, date } = request.body;

        const senhaCriptografada = bcrypt.hashSync(senha, 10);

        const usuario = await Usuario.create({
            nome: nome,
            senha: senhaCriptografada,
            cpf: cpf,
            email: email,
            genero: genero,
            dataNascimento: date,
        })

        request.session.autorizado = true;
        request.session.usuarioEncontrado = usuario;

        response.redirect('/perfil');
    }
};

module.exports = cadastroController;
