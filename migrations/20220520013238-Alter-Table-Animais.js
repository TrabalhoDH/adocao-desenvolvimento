'use strict';

module.exports = {
   up:(queryInterface, Sequelize) =>{
    return Promise.all([
    queryInterface.addColumn(
      'animais', 
      'nome',
      
      {
       type: Sequelize.STRING 
      }
    ),
    queryInterface.addColumn(
    'animais',
    'fotos_id',
    {
      type: Sequelize.INTEGER.UNSIGNED,
        foreignKey: true,
        allowNull:false
    },
    ),
    queryInterface.removeColumn('animais', 'imagem')
  ])
},

   down:(queryInterface, Sequelize)=>{
    return Promise.all([
      queryInterface.removeColumn('animais', 'nome'),
      queryInterface.removeColumn('animais', 'fotos_id')
    ])
  }
}

