const {Usuario} = require('../models')



const loginController = {
    login : (request,response)=>{
    response.render('login');
    },
    logar: async (request, response) => {
   
        const { email, senha } = request.body;

        const usuarioEncontrado = await Usuario.findOne({
            where:{
                email: email,
                senha: senha
            }
        });
      
        request.session.autorizado = true;
        request.session.usuarioEncontrado = resultado;
        return response.redirect('/perfil');
    
    }
};

module.exports =loginController;