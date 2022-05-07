module.exports=(sequelize,DataType)=>{
    const Animal = sequelize.define('Animal',{
        id_animal:{
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
            type:DataTypes.DATE,
            allowNull:false
        }

    },{
        tableName:'animais',
        timestamps:false
    })
    return animal
}