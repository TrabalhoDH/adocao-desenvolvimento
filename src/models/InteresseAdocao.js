module.exports=(sequelize,DataType)=>{
    const InteresseAdocao = sequelize.define('InteresseAdocao',{
        id:{
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
            foreignKey:true,
        },
        anuncio_id:{
            type:DataType.INTEGER,
            foreignKey:true,
        },
        doacao_id:{
            type:DataType.INTEGER,
            foreignKey:true,
        }
        

    },{
        tableName:'interesse_doacao',
        timestamps:false
    })
    return InteresseAdocao
}