const {Animal} = require('../models');
const {Foto} = require('../models');

const doandoController ={
    pet : (request, response)=>{
    response.render('cadastro-pet')},
    

    novoAnimais: async (request,response)=>{
        const {nome,tipoDePet,raca,tamanhoDoPet,genero,dataNascimento,corPredominante,pelagem,vacinado,castrado} = request.body;
 
        const { id } = request.session.usuarioEncontrado;
       
        const imagens = request.files

        const animal = await Animal.create({
           raca,
           nome,
           vacinado,
           castrado,
           porte:tamanhoDoPet,
           cor:corPredominante,
           tipo:tipoDePet,
           genero,
           idade:dataNascimento,
           pelagem,
           usuario_id:id,     
        });

        const foto = imagens.forEach( async element =>{
            await Foto.create({                     
                nome: element.filename,
                caminho:'../uploads/',
                criado_em:`${new Date()}`,
                animal_id: animal.id
            })        
        })


        //console.log(animal.id)
        console.log(foto)


        request.session.autorizado = true;
        response.redirect('/perfil');
    }

}; 
module.exports = doandoController