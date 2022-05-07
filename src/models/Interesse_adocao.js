module.exports=(sequelize,DataType)=>{
    const Interesse = sequelize.define('Interesse_adocao',{
        id_anuncio:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        mensagem:{
            type:DataType.STRING,
            allowNull:false
        },
        criado_em:{
            type:DataType.DATE,
            allowNull:false,
        },
        usuario_id:{
            type:DataType.INTEGER,
            forgeinKey:true,
        },
        anuncio_id:{
            type:DataType.INTEGER,
            forgeinKey:true,
        },
        doacao_id:{
            type:DataType.INTEGER,
            forgeinKey:true,
        }
        

    },{
        tableName:'interesse_doacao',
        timestamps:false
    })
    return Interesse_adocao
}