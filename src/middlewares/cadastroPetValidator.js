const { check, validationResult, body } = require('express-validator');
const { options } = require('../routes/doandoRouter');

const cadastroPetValidator = [
    body('nome').notEmpty().withMessage('Deve preencher o nome').bail(),
    body('tipoDePet').isString().withMessage('Deve preencher o tipo').bail(),
    body('raca').notEmpty().withMessage('Deve preencher a raça').bail(),
    body('tamanhoDoPet').isString().withMessage('Deve preencher o tamanho').bail(),
    body('genero').isString().withMessage('Deve preencher o genero').bail(),
    body('dataNascimento').notEmpty().withMessage('Deve preencher a data de nascimento').bail(),
    body('corPredominante').isString().withMessage('Deve preencher a cor predominante').bail(),
    body('pelagem').isString().withMessage('Deve preencher a pelagem').bail(),
    body('vacinado').isString().withMessage('Deve selecionar o campo correspondente').bail(),
    body('castrado').isString().withMessage('Deve selecionar o campo correspondente').bail(),
    body('fotos').custom(options).withMessage('Deve selecionar no mínimo 2 imagens ou no máximo 4 imagens').bail(),
];



module.exports = cadastroPetValidator;
