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
    },{
        tableName:'interesse_doacao',
        timestamps:false
    })
    return InteresseAdocao
}