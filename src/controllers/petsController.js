const { info } = require('console');
const { validationResult } = require('express-validator');
const { Animal, Foto } = require('../models');


const petsController = {
    index: (_, response) => {
        response.render('cadastro-pet')
    },

    store: async (request, response) => {
        const listaErros = validationResult(request);

        const { id } = request.session.usuarioEncontrado;
        const { nome, tipoDePet, raca, tamanhoDoPet, genero, dataNascimento, corPredominante, pelagem, vacinado, castrado } = request.body;
        const dados = request.body;

        if (listaErros.isEmpty()) {
            const animal = await Animal.create({
                raca,
                nome,
                vacinado,
                castrado,
                porte: tamanhoDoPet,
                cor: corPredominante,
                tipo: tipoDePet,
                genero,
                idade: dataNascimento,
                pelagem,
                idUsuario: id,
            });

            const imagens = request.files
            await Promise.all(imagens.map(element =>
                Foto.create({
                    nome: element.filename,
                    caminho: '../uploads/',
                    criadoEm: `${new Date()}`,
                    idAnimal: animal.id
                })
            ));

            request.session.autorizado = true;
            response.redirect('/perfil');
        } else {
            request.session.autorizado = true;
            response.render('cadastro-pet', {
                erros: listaErros.errors,
                valores: dados
            })
        }
    },

    update: async (request, response) => {
        const { nome, tipoDePet, raca, tamanhoDoPet, genero, dataNascimento, corPredominante, pelagem, vacinado, castrado } = request.body;
        const { idAnimal } = request.params

        const animal = await Animal.findByPk(idAnimal);

        await Animal.update({
            raca,
            nome,
            vacinado,
            castrado,
            porte: tamanhoDoPet,
            cor: corPredominante,
            tipo: tipoDePet,
            genero,
            idade: dataNascimento,
            pelagem,
        }, {
            where: { id: animal.id }
        });

        request.session.autorizado = true;
        response.redirect('/perfil');
    }
};

module.exports = petsController;