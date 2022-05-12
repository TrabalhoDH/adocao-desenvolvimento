const {Animal} = require('../models');


const feedControler ={
    show :(request, response)=>{
    response.render('anuncio')
    },

};
module.exports = feedControler;