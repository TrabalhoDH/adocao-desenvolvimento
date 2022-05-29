'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
      CREATE TABLE usuarios( 
        id int unsigned NOT NULL AUTO_INCREMENT,
        nome varchar(200) NOT NULL,
        email varchar(100) NOT NULL,
        senha varchar(100) NOT NULL,
        genero varchar(50) NOT NULL,
        data_nasc date NOT NULL,
        criado_em date NOT NULL,
        cpf bigint NOT NULL,
        PRIMARY KEY(id)
      );
    `)
  },

  down:(queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP TABLE usuarios')
  }
};


