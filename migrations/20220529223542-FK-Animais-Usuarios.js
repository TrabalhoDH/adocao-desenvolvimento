'use strict';

module.exports = {
    up: async (queryInterface, Sequelize)=>{
        await queryInterface.addConstraint('animais',{
          fields:['usuario_id'],
          type: 'foreign key',
          name: 'animais_usuarios_association',
          references: {
           table: 'usuarios',
            field: 'id' 
            },
          })
        },
   down: async (queryInterface, Sequelize)=>{
    await queryInterface.removeConstraint('animais',{
          fields:['usuario_id'],
          type: 'foreign key',
          name: 'animais_usuarios_association',
          references: {
           table: 'usuarios',
            field: 'id' 
            },
    })
   }
}
