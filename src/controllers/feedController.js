const { Animal, Anuncio } = require('../models');
const { Op } = require('sequelize');

const feedControler = {
    show: async (request, response) => {
        const pesquisa = request.query.pesquise;

        const campoBuscar = ['nome', 'raca', 'porte', 'tipo', 'cor', 'genero', 'pelagem']
        const where = campoBuscar.map(item => ({
            [item]: {
                [Op.like]: `%${pesquisa}%`
            }
        }));

        const anuncios = await Anuncio.findAll({
            include: [{
                model: Animal,
                as: 'Animal',
                where: {
                    [Op.or]: where
                },
                include: ['Fotos']
            }],
        });

        response.render('feed', {
            anuncios,
        })
    },
    adotarAnimal: (_, response) => {
        response.render('animalDivulgado')
    }
};

module.exports = feedControler;