const {Animal} = require('../models');


const adocaoController ={
    show :(request, response)=>{
    response.render('adocao')
    },

};
module.exports = adocaoController;