const {check,validationResult,body} = require('express-validator');

const cadastroUserValidator = [
    body("nome").notEmpty().withMessage('Deve preencher o nome').bail(),
    body("cpf").notEmpty().withMessage('Deve preencher o CPF').bail(),
    body("email").isEmail().withMessage('Deve preencher o Email').bail(),
    body("telefone").isLength({min:11}).withMessage('Deve preencher o numero de telefone').bail(),
    body("date").isDate().withMessage('Deve preencher a data de nascimento').bail(),
    body("estado").notEmpty().withMessage('Deve preencher o estado de residência').bail(),
    body("cidade").notEmpty().withMessage('Deve preencher a cidade de residência').bail(),
    body("genero").notEmpty().withMessage('Deve preencher o genero').bail(),
    body("fotoPerfil").notEmpty()
]

module.exports = cadastroUserValidator;