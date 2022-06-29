const { info } = require('console');
const { validationResult } = require('express-validator');
const { Animal, Foto, Anuncio, InteresseAdocao } = require('../models');


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
                dataNascimento,
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
        const { nome, tipoDePet, raca, tamanhoDoPet, genero, dataNascimento, corPredominante, pelagem, vacinado, castrado, idUsuario } = request.body;
        const { idAnimal } = request.params

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
            where: { id: idAnimal }
        });

        request.session.autorizado = true;

        response.redirect('/perfil');
    },

    deletar: async (request, response) => {
        const { id } = request.session.usuarioEncontrado;
        const { idAnimal } = request.params

        await InteresseAdocao.destroy({
            where: {
                idUsuario: id
            }
        })
        await Anuncio.destroy({
            where: {
                idAnimal
            }
        }),
            await Foto.destroy({
                where: {
                    idAnimal
                }
            }),
            await Animal.destroy({
                where: {
                    id: idAnimal
                }
            })

        request.session.autorizado = true;
        response.redirect('/perfil')
    }
};

module.exports = petsController;