'use strict';
module.exports = {
  up:(queryInterface, Sequelize) => { 
    return Promise.all([
       queryInterface.addColumn(
        'animais', 
        'tipo',
        {
         type: Sequelize.STRING 
        }
      ),
       queryInterface.addColumn(
        'animais',
        'genero',
        {
          type: Sequelize.STRING 
        }
      ),
       queryInterface.addColumn(
        'animais',
        'idade',
        {
         type: Sequelize.INTEGER
        }
      ),
       queryInterface.addColumn(
        'animais',
        'pelagem',
        {
          type: Sequelize.STRING
        }
      ),
       queryInterface.addColumn(
        'animais',
        'imagem',
        {
          type: Sequelize.STRING
        }
       ),
      queryInterface.addColumn(
          'animais',
          'infoExtra',
          {
            type: Sequelize.STRING
          }
        ),
       queryInterface.addColumn(
        'animais',
        'usuarios_id',
        {
          type: Sequelize.INTEGER.UNSIGNED,
            foreignKey: true,
        },
      ), 
    ])
  },

  down:(queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('animais', 'tipo'),
      queryInterface.removeColumn('animais', 'genero'), 
      queryInterface.removeColumn('animais', 'idade'),
      queryInterface.removeColumn('animais', 'pelagem'),
      queryInterface.removeColumn('animais', 'imagem'),
      queryInterface.removeColumn('animais', 'usuario_id'),
    ]);
  }
};
