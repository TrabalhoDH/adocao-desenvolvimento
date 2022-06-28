'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      await queryInterface.dropTable('doacoes'),
      await queryInterface.dropTable('enderecos'),
    ])
  },

  async down (queryInterface, Sequelize) {

  }
};
