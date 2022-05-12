module.exports=(sequelize,DataType)=>{
    const Anuncio = sequelize.define('Anuncio',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        criado_em:{
            type:DataType.DATE,
            allowNull:false,
        },
        mensagem:{
            type:DataType.STRING,
            allowNull:false
        },
        usuario_id:{
            type:DataType.INTEGER,
            forgeinKey:true,
        }
        

    },{
        tableName:'anuncios',
        timestamps:false
    })
    return Anuncio
}