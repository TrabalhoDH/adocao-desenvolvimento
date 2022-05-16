
'use strict';

module.exports = {
  up:(queryInterface, Sequelize) => {
   return queryInterface.addConstraint('animais',{
    fields:['usuarios_id'],
    type: 'foreign key',
    name: 'animais_usuarios_association',
    references: {
     table: 'usuarios',
      field: 'id' 
      },
    }
   )
  },

  down:(queryInterface, Sequelize)=>{
    return queryInterface.removeConstraint('animais',{
      fields:['usuarios_id'],
      type: 'foreign key',
      name: 'animais_usuarios_association',
      references: {
       table: 'usuarios',
        field: 'id',
      }
    }
    )
  }
};








// module.exports = {
//   up (queryInterface, Sequelize) { 
//     return Promise.all([
//       queryInterface.addColumn(
//       'usuarios',
//       'animais_id',
//         {
//           type: Sequelize.INTEGER.UNSIGNED,
//           allowNull: true

//         }
//       ),
//        queryInterface.addConstraint('usuarios', {
//           type: 'foreign key',
//           name: 'usuarios_animais_id_fkey',
//           fields: ['animais_id'],
//           references: {
//             table: 'animais',
//             field: 'animais_Id'
//           },   
//         }   
//         )
//     ]
//     )
//   },
//    down(queryInterface, Sequelize) {
//     queryInterface.removeColumn('usuarios', 'animais_id')
//   }

// }
