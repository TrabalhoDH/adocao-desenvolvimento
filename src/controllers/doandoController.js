const {Animal} = require('../models');
const {Foto} = require('../models');

const doandoController ={
    pet : (request, response)=>{
    response.render('cadastro-pet')},
    

    novoAnimais: async (request,response)=>{
        const { id } = request.session.usuarioEncontrado;
        
        const {tipoDePet,raca,tamanhoDoPet,genero,idade,corPredominante,pelagem,maisInformacoes} = request.body;

        const imagens = request.files

        const animal = await Animal.create({
           raca,
           porte:tamanhoDoPet,
           cor:corPredominante,
           tipo:tipoDePet,
           genero,
           idade,
           pelagem,
           infoExtra:maisInformacoes,
           usuarios_id: id,
           criado_em:`${new Date()}`
        });

        const foto = imagens.forEach( async element =>{
            await Foto.create({                     
                nome: element.filename,
                caminho:'../uploads/',
                criado_em:`${new Date()}`,
                animal_id: animal.id
            })        
        })

        console.log(foto)

        request.session.autorizado = true;
        response.redirect('/perfil');
    }

}; 
module.exports = doandoController