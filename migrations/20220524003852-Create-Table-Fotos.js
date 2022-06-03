'use strict';

module.exports = {
   up:(queryInterface, Sequelize)=> {
    return queryInterface.sequelize.query(`
      CREATE TABLE fotos (
        id int unsigned NOT NULL AUTO_INCREMENT,
        nome varchar(200) NOT NULL,
        caminho varchar(1000) NOT NULL,
        criado_em date NOT NULL,
        PRIMARY KEY (id)
      )
    `)
  },

   down:(queryInterface, Sequelize)=> {
    return queryInterface.sequelize.query('DROP TABLE fotos')
  }
};
