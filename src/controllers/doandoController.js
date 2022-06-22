const { Animal,Usuario,Foto } = require('../models');

const doandoController = {
    pet: (_, response) => {
        response.render('cadastro-pet')
    },

    novoAnimais: async (request, response) => {
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
            usuario_id: id,
        });

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
    },
    atualizar: async(request,response)=>{
        const { nome, tipoDePet, raca, tamanhoDoPet, genero, dataNascimento, corPredominante, pelagem, vacinado, castrado,idAnimal } = request.body;

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
        },
        {
            where:{id:animal.id}
        });

        request.session.autorizado = true;
        response.redirect('/perfil');
    }
};

module.exports = doandoController