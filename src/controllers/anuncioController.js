const {Animal} = require('../models');
const {Usuario} = require('../models');

const anuncioController ={
    show :(request, response)=>{
       
    response.render('anuncio')
    },

};
module.exports = anuncioController;