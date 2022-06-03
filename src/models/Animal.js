
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
        infoExtra:{
            type: DataType.JSON,
        },
        usuarios_id:{
            type: DataType.INTEGER,
            foreignKey: true
        },
    },{
        tableName:'animais',
        timestamps:false,
        createdAt: 'criado_em',
        updatedAt: false
    });
     Animal.associate = (models)=>{
        Animal.belongsTo(models.Usuario,{
            as: 'Usuario',
            foreignKey: 'usuarios_id'
        }),
        Animal.hasMany(models.Foto,{
            as: 'Fotos',
            foreignKey: 'animal_id'
        })
    }
      
    return Animal
}