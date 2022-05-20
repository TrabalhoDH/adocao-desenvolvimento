'use strict';

module.exports = {
   up:(queryInterface, Sequelize) =>{
    return Promise.all([
      queryInterface.addColumn(
        'anuncios', 
        'animais_id',
        {
         type: Sequelize.INTEGER.UNSIGNED,
         foreignKey:true,
         allowNull:false,
        },
      )
    ])
  },

  down:(queryInterface, Sequelize)=>{
    return Promise.all([
      queryInterface.removeColumn(
        'anuncios', 
        'animais_id',
      ),
    ])

  }
};
