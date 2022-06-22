const { body } = require('express-validator');

const petsValidator = {
    store: [
        body('tipo').notEmpty().withMessage('Deve preencher o nome').bail(),
        body('raca').notEmpty().withMessage('Deve preencher o nome').bail(),
        body('tamanho').notEmpty().bail(),
        body('genero').notEmpty().bail()
    ],
}

module.exports = petsValidator;