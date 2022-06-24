const bcrypt = require('bcryptjs');
const { Usuario } = require('../models')
const { validationResult } = require('express-validator')

const cadastroController = {
    usuario: (_, response) => {
        response.render('cadastro-pessoas')
    },

    novoUsuarios: async (request, response) => {
        const listaErros = validationResult(request);

        const { nome, senha, cpf, email, genero, dataNascimento } = request.body;
        const senhaCriptografada = bcrypt.hashSync(senha, 10);
        const dados = request.body

        if (listaErros.isEmpty()) {
            const usuario = await Usuario.create({
                nome: nome,
                senha: senhaCriptografada,
                cpf: cpf,
                email: email,
                genero: genero,
                dataNascimento
            })

            request.session.autorizado = true;
            request.session.usuarioEncontrado = usuario;

            response.redirect('/perfil');
        } else {
            request.session.autorizado = true;
            response.render('cadastro-pessoas', {
                erros: listaErros.errors,
                valores: dados
            });
        }
    }
};

module.exports = cadastroController;
