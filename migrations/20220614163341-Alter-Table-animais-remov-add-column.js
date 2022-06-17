'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('animais', 'infoExtra'),

      queryInterface.addColumn('animais', 'castrado', {
        type: Sequelize.DataTypes.STRING
      }),

      queryInterface.addColumn('animais', 'vacinado', {
        type: Sequelize.DataTypes.STRING
      }),

      queryInterface.changeColumn('animais', 'idade', {
        type: Sequelize.DataTypes.DATE,
      }),
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('animais', 'castrado'),
      queryInterface.removeColumn('animais', 'vacinado')
    ])
  }
};
