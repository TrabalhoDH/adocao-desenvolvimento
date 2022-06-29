const { Usuario,Animal,Anuncio } = require('../models');
const InteresseAdocao = require('../models/InteresseAdocao');

const perfilController = {
    index: async (request, response) => {
        const { id } = request.session.usuarioEncontrado;

        const usuario = await Usuario.findOne({
            where: {
                id
            },
        });

        const animais = await Animal.findAll({
            where: {
                idUsuario: id
            },
            include: ['Fotos']
        });

        const i = animais.map(item=>{
            return item.id
        })
       
        const anuncio = await Anuncio.findAll({
            where:{
                idAnimal: i
            },
            include:['InteresseAdocao']
        })

        return response.render('perfil', {
            usuario,
            animais,
            anuncio,
        });
    },
};

module.exports = perfilController; 