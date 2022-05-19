'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
   return queryInterface.addConstraint('usuarios',{
    fields:['animais_id'],
    type: 'foreign key',
    name: 'usuarios_animais_association',
    references: {
     table: 'animais',
      field: 'id' 
      },
    }
   )
  },

  down:(queryInterface, Sequelize)=>{
    return queryInterface.removeConstraint('usuarios',{
      fields:['animais_id'],
      type: 'foreign key',
      name: 'usuarios_animais_association',
      references: {
       table: 'animais',
        field: 'id',
      }
    }
    )
  }
};