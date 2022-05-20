'use strict';

module.exports = {
    up: async (queryInterface, Sequelize)=>{
        await queryInterface.addConstraint('anuncios',{
          fields:['animais_id'],
          type: 'foreign key',
          name: 'anuncios_animais_association',
          references: {
           table: 'animais',
            field: 'id' 
            },
          })
        },
   down: async (queryInterface, Sequelize)=>{
    await queryInterface.removeConstraint('anuncios',{
          fields:['animais_id'],
          type: 'foreign key',
          name: 'anuncios_animais_association',
          references: {
           table: 'animais',
            field: 'id' 
            },
    })
   }
}
