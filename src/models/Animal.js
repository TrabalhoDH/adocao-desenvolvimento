const { DataType } = require('sequelize');
module.exports=(sequelize,DataType)=>{
    const Animal = sequelize.define('Animal',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        raca:{
            type:DataType.STRING,
            allowNull:false,
        },
        porte:{

            type:DataType.STRING,
            allowNull:false
        },
        cor:{
            type:DataType.STRING,
            allowNull:false
        },
        criado_em:{
            type:DataType.DATE,
            allowNull:false
        },
        tipo:{
            type: DataType.STRING,
        },
        genero:{
            type: DataType.STRING,
        },
        idade:{
            type: DataType.INTEGER
        },
        pelagem:{
            type: DataType.STRING,
        },
        nome:{ 
            type: DataType.STRING,
        },
        infoExtra:{
            type: DataType.JSON,
        },
        usuario_id:{
            type: DataType.INTEGER,
            foreignKey: true
        },
    },
    
    {
        tableName:'animais',
        timestamps:true,
        createdAt: 'criado_em',
        updatedAt: false
    });
     
    Animal.associate = (models)=>{
        Animal.belongsTo(models.Usuario,{
            as: 'Usuario',
            foreignKey: 'usuario_id'
        });
    }
      
    return Animal
}