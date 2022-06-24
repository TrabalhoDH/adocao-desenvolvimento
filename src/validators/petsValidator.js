const { body } = require('express-validator');

const petsValidator = {
    store: [
        body('nome').isLength({ min: 5 }).withMessage('Deve preencher o nome').bail(),
        body('tipoDePet').isString().withMessage('Deve selecionar tipo').bail(),
        body('raca').notEmpty().withMessage('Deve preencher a raça').bail(),
        body('tamanhoDoPet').isString().withMessage('Deve selecionar o tamanhoo').bail(),
        body('genero').isString().withMessage('Deve selecionar o genero').bail(),
        body('pelagem').isString().withMessage('Deve selecionar a pelagem').bail(),
        body('vacinado').isString().withMessage('Deve selecionar se o pet é vacinado ou não').bail(),
        body('castrado').isString().withMessage('Deve selecionar se o pet é castrado ou não').bail(),
        body('dataNascimento').isDate().withMessage('Deve preencher a data de nascimento').bail(),
        body('corPredominante').isString().withMessage('Deve selecionar a cor predominante').bail(),
    ],
}

module.exports = petsValidator;