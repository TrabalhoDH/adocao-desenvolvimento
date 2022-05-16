'use strict';
module.exports = {
up:(queryInterface, Sequelize) => { 
    return queryInterface.addColumn(
        'usuarios', 
        'animais_id',
        {
         type: Sequelize.INTEGER.UNSIGNED,
         foreignkey:true 
        }
    )
    },

  down:(queryInterface, Sequelize) => {
    return queryInterface.removeColumn('usuarios', 'animais_id')
  }
}

