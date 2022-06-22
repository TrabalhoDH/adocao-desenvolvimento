const { Animal, Foto } = require('../models');
const { check, validationResult, body } = require('express-validator')

const doandoController = {
    pet: (_, response) => {
        response.render('cadastro-pet')
    },

    novoAnimais: async (request, response) => {
        
        console.log(validationResult(request))
        const listaErros = validationResult(request);

        if (listaErros.isEmpty()) {

            const { nome, tipoDePet, raca, tamanhoDoPet, genero, dataNascimento, corPredominante, pelagem, vacinado, castrado } = request.body;

            const { id } = request.session.usuarioEncontrado;

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
                usuario_id: id,
            });

            const imagens = request.files

            await Promise.all(imagens.map(element =>
                Foto.create({
                    nome: element.filename,
                    caminho: '../uploads/',
                    criado_em: `${new Date()}`,
                    animal_id: animal.id
                })
            ));
            request.session.autorizado = true;
             response.redirect('/perfil');
        
        } else {
             response.redirect('/doando/pet')
        }
    },
};

module.exports = doandoController