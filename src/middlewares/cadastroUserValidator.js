const { check, validationResult, body } = require('express-validator');

const cadastroUserValidator = [
    body('nome').notEmpty().withMessage('Deve preencher o nome').bail(),

    body('cpf').notEmpty().withMessage('Deve preencher o nome').bail(),
    body('email').isEmail(),
    body('telefone').isLength({ min: 11 }),
    body('date').isDate(),
    body('estado').notEmpty(),
    body('cidade').notEmpty(),
    body('genero').notEmpty(),
    body('fotoPerfil').notEmpty()
]

module.exports = cadastroUserValidator;