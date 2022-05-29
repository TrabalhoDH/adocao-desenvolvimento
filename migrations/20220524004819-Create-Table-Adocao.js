'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.sequelize.query(`
      CREATE TABLE adocao (
        id int unsigned NOT NULL AUTO_INCREMENT,
        criado_em date NOT NULL,
        PRIMARY KEY (id)
      );
    `) 
  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP TABLE adocao')
  }
};
