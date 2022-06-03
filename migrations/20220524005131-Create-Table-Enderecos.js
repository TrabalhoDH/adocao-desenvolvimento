'use strict';

module.exports = {
  up:(queryInterface, Sequelize)=>{
    return queryInterface.sequelize.query(`
      CREATE TABLE enderecos (
        id int unsigned NOT NULL AUTO_INCREMENT,
        cep int unsigned NOT NULL,
        logradouro varchar(500) NOT NULL,
        numero int DEFAULT NULL,
        complemento varchar(50) DEFAULT NULL,
        cidade varchar(100) NOT NULL,
        estado varchar(100) NOT NULL,
        PRIMARY KEY (id)
      );
    `) 
  },

  down:(queryInterface, Sequelize)=>{
    return queryInterface.sequelize.query('DROP TABLE enderecos')
  }
};
