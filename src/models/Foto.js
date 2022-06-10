module.exports=(sequelize,DataType)=>{
    const Foto = sequelize.define('Foto',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        nome:{
            type:DataType.STRING,
            allowNull:false
        },
        caminho:{
            type:DataType.STRING,
            foreignKey:true,
        },
        criado_em:{
            type:DataType.DATE,
            allowNull:false,
        },
        animal_id:{
            type:DataType.INTEGER,
            foreignKey: true,
        },
    },{
        tableName:'fotos',
        timestamps:false,
        createdAt: 'criado_em',
        updatedAt: false
    })
    return Foto
}