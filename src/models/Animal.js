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
        }

    },{
        tableName:'animais',
        timestamps:false
    });
/*     Animal.associate = (models)=>{
        Animal.belongsTo(models.Adocao,{
            as: 'adocao',
            foreignKey: 'animal_id'
        });
    }  */   
    return Animal
}