'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
      CREATE TABLE animais(
        id int unsigned NOT NULL AUTO_INCREMENT,
        raca varchar(200) NOT NULL,
        nome varchar(200) DEFAULT NULL,
        porte varchar(100) NOT NULL,
        cor varchar(100) NOT NULL,
        criado_em date NOT NULL,
        tipo varchar(255) DEFAULT NULL,
        genero varchar(255) DEFAULT NULL,
        idade int DEFAULT NULL,
        pelagem varchar(255) DEFAULT NULL,
        infoExtra varchar(255) DEFAULT NULL,
        usuarios_id int unsigned NOT NULL,
        PRIMARY KEY (id)
      );
    `)
  },

  down: (queryInterface, Sequelize) =>{
    return queryInterface.sequelize.query('DROP TABLE animais')
  }
};
