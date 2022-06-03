'use strict';

module.exports = {
  up:  (queryInterface, Sequelize) => {
    return queryInterface.addColumn('fotos','animal_id', 
      {
       type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: {
            tableName: 'animais',
          },
          key: 'id'
        },
      },
  )},
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('fotos','animal_id');
  }
}