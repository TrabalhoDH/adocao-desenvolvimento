'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.addColumn('usuarios', 'estado', {
        type: Sequelize.DataTypes.STRING
      }),

      await queryInterface.addColumn('usuarios', 'cidade', {
        type: Sequelize.DataTypes.STRING
      }),

      await queryInterface.addColumn('usuarios', 'rua', {
        type: Sequelize.DataTypes.STRING
      }),
      await queryInterface.addColumn('usuarios', 'telefone',{
        type: Sequelize.DataTypes.STRING
      }),
    ])
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.removeColumn('usuarios', 'estado'),
      await queryInterface.removeColumn('usuarios', 'cidade'),
      await queryInterface.removeColumn('usuarios', 'rua'),
      await queryInterface.removeColumn('usuarios', 'telefone'),
    ])
  }
};
