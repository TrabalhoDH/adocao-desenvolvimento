'use strict';

module.exports = {
  up:(queryInterface, Sequelize) =>{
    return Promise.all([
      queryInterface.addColumn('anuncios','animal_id',{
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName: 'animais'
          },
          key : 'id'
        },      
      }),
      queryInterface.addColumn('anuncios', 'usuario_id',{
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName: 'usuarios'
          },
          key: 'id'     
        },
      }),
      queryInterface.addColumn('interesse_adocao','usuario_id', {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName:'usuarios'
          },
          key: 'id'
        },
      }),
      queryInterface.addColumn('interesse_adocao','anuncio_id', {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName: 'anuncios'
          },
          key: 'id'
        },
      }),
      queryInterface.addColumn('enderecos','usuario_id',{
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references:{
          model:{
            tableName: 'usuarios'
          },
          key: 'id'
        },
      })
    ])
  },

  down:(queryInterface, Sequelize) =>{
   return Promise.all([
    queryInterface.removeColumn('anuncios','animal_id'),
    queryInterface.removeColumn('anuncios', 'usuario_id'),
    queryInterface.removeColumn('interesse_adocao','usuario_id',),
    queryInterface.removeColumn('interesse_adocao','anuncio_id',),
    queryInterface.removeColumn('enderecos','usuario_id',)
   ])
  }
};
