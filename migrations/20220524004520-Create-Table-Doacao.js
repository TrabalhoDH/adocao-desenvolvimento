'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.sequelize.query(`
      CREATE TABLE doacoes (
        id int unsigned NOT NULL AUTO_INCREMENT,
        valor int unsigned NOT NULL,
        criado_em date NOT NULL,
        PRIMARY KEY (id)
      );
    `)
  },

 down:(queryInterface, Sequelize)=>{
  return queryInterface.sequelize.query('DROP TABLE doacoes')
  }
};
