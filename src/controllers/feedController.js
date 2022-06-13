const {Animal,Anuncio} = require('../models');
const { Op } = require("sequelize");

const feedControler ={
    show : async (request, response)=>{
    const pesquisa = request.query;
    
    const pesquisaJSON = JSON.stringify(pesquisa);
    
    const obj = JSON.parse(pesquisaJSON);

    const anuncios = await Anuncio.findAll({
        include:[{
            model:Animal,
            as:'Animal',
            where:{
                [Op.or]:[
                    {nome:{
                        [Op.like]:`%${obj.pesquise}%`
                    }},
                    {raca:{
                        [Op.like]:`%${obj.pesquise}%`
                    }},
                    {porte:{
                        [Op.like]:`%${obj.pesquise}%`
                    }},
                    {tipo:{
                        [Op.like]:`%${obj.pesquise}%`
                    }},
                ]
            },
            include:['Fotos']
        }],    
    });

    response.render('feed',{
        anuncios,
    })
    },

};
module.exports = feedControler;