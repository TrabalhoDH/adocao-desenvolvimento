module.exports=(sequelize,DataType)=>{
    const Adocao = sequelize.define('Adocao',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        criado_em:{
            type:DataType.INTEGER,
            allowNull:false
        },
    },{
        tableName:'adocao',
        timestamps:false,
    })

    return Adocao
}