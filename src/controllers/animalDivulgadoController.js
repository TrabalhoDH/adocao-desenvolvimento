const { Animal, Anuncio } = require('../models');


const animalDivulgadoContrller = {
    show: (request, response) => {
        
        response.render('animalDivulgado')
    }
};
module.exports = animalDivulgadoContrller;