const { Animal, Foto } = require('../models');

const petsController = {
    index: (_, response) => {
        response.render('cadastro-pet')
    },

    store: async (request, response) => {
        const { nome, tipoDePet, raca, tamanhoDoPet, genero, dataNascimento, corPredominante, pelagem, vacinado, castrado } = request.body;

        const { id } = request.session.usuarioEncontrado;

        const imagens = request.files

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