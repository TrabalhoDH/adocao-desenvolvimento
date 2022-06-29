const { Usuario,Animal,Anuncio,InteresseAdocao} = require('../models');

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
        })
        
        const idAnuncio = anuncio.map(anuncio =>{
            return anuncio.id
        })

        const interessados = await InteresseAdocao.findAll({
            where:{
              idAnuncio
            },
            include:['Usuario']
        })

        

        const interesse = interessados.map(item=>{
        return item.Usuario        
        })
        
        //  console.log(interesse)

        return response.render('perfil', {
            usuario,
            animais,
            anuncio,
            interessados,
            interesse
        });
    },
};

module.exports = perfilController; 