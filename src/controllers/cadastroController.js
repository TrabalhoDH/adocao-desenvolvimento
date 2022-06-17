const bcrypt = require('bcryptjs');
const {Usuario} = require('../models')


const cadastroController ={
    usuario: (request, response)=>{
    response.render('cadastro-pessoas')},

    novoUsuarios: async (request,response)=>{
        const {nome,senha,cpf,email,genero,date} = request.body;

        const senhaCriptografada = bcrypt.hashSync(senha ,10);

        const usuario = await Usuario.create({
            nome:nome,
            senha:senhaCriptografada,
            cpf:cpf,
            email:email,
            genero:genero,
            data_nasc:date,
        })

        request.session.autorizado = true;
        request.session.usuarioEncontrado = usuario;

        console.log(usuario)

        response.redirect('/perfil');
    }
};


module.exports = cadastroController

/*         const novoArquivoUsuario = 'usuario.json';
        const usuarioArquivo = fs.readFileSync(novoArquivoUsuario);
        const usuarioJSON = JSON.parse(usuarioArquivo);

        const novoUsuario = {
            id: uuid(),
            ...request.body,
            senha : senhaC,
            fileName: request.file.filename
        }

        usuarioJSON.push(novoUsuario);

        fs.writeFileSync(novoArquivoUsuario, JSON.stringify(usuarioJSON)); */