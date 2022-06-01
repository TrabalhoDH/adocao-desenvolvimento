'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
      CREATE TABLE interesse_adocao (
        id int unsigned NOT NULL AUTO_INCREMENT,
        mensagem varchar(10000) NOT NULL,
        criado_em date NOT NULL,
        PRIMARY KEY (id)
      );
    `)
  },

   down:(queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP TABLE interesse_adocao')
  }
};
