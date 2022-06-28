const { body } = require('express-validator');

const usuariosValidator = {
    store: [
        body('nome').notEmpty().withMessage('Deve preencher o nome').bail(),
        body('senha').isLength({min:6}).withMessage('Preencha a senha com no mínimo 6 caracteres').bail(),
        body('cpf').isNumeric({ min: 11 }).withMessage('Deve preencher o CPF com 11 dígitos').bail(),
        body('email').isEmail().withMessage('Deve preencher o email').bail(),
        body('telefone').isLength({ min: 11 }).withMessage('Deve preencher o numero de telefone').bail(),
        body('dataNascimento').isDate().withMessage('Deve preencher a data de nascimento').bail(),
        body('cidade').notEmpty().withMessage('Deve preencher a cidade correspondente').bail(),
        body('rua').isString().withMessage('Deve preencher a rua correspondente').bail(),
        body('estado').isString().withMessage('Deve selecionar o estado correspondente').bail(),
    ]
}

module.exports = usuariosValidator;