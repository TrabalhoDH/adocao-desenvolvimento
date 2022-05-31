const {Animal} = require('../models');


const feedControler ={
    show : async (request, response)=>{
    const pesquisa = request.query;

    const resultadoPesquisa = await Animal.findAll({
        
        like :`%${pesquisa}%`
    });

    response.render('feed',{
        resultadoPesquisa
    })
    },

};
module.exports = feedControler;