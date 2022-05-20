'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addConstraint('animais',{
      fields:['fotos_id'],
      type: 'foreign key',
      name: 'animais_fotos_association',
      references: {
       table: 'fotos',
        field: 'id' 
        },
      }
     )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('animais',{
      fields:['fotos_id'],
      type: 'foreign key',
      name: 'animais_fotos_association',
      references: {
       table: 'fotos',
        field: 'id',
      }
    }
    )
  }
};
