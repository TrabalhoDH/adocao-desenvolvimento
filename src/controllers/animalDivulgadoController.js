const { DATE } = require('sequelize');
const { Animal, Anuncio, Usuario, InteresseAdocao } = require('../models');


const animalDivulgadoContrller = {
    show: async (request, response) => {
        const {id} = request.params;

        const anuncio = await Anuncio.findOne({where:{id:id}})
        const animal = await Animal.findByPk(Anuncio.idAnimal)
        const usuario = await Usuario.findOne(Anuncio.idUsuario)
    
        response.render('animalDivulgado',{
            anuncio,
            animal,
            usuario
        })
    },

    store: async ( request ,response)=>{
        const {id} = request.session.usuarioEncontrado;

        const {idAnuncio,mensagem} = request.body;

        await InteresseAdocao.create({
            mensagem,
            idUsuario:id,
            idAnuncio,
            criadoEm: `${new Date()}`,
        })
            
        request.session.autorizado = true;
        response.redirect('perfil')
    }
};
module.exports = animalDivulgadoContrller;