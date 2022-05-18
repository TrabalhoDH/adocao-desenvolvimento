const {Usuario} = require('../models')
const bcrypt = require('bcryptjs');


const loginController = {
    login : (request,response)=>{
    response.render('login');
    },
    logar: async (request, response) => {
   
        const { email, senha } = request.body;

        const usuarioEncontrado = await Usuario.findOne({
            where:{
                email
            },

            // const  = 
        });
      
        request.session.autorizado = true;
        request.session.usuarioEncontrado = usuarioEncontrado;
        return response.redirect('/perfil');
    
    }
};

module.exports =loginController;