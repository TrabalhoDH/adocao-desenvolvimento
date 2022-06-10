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
            foreignKey: true
        },
        anuncio_id:{
            type:DataType.INTEGER,
            foreignKey:true
        }
    },{
        tableName:'interesse_doacao',
        timestamps:false,
        criatedAt:'criado_em',
        updatedAt:false
    })

    InteresseAdocao.associate =(models) =>{
        InteresseAdocao.belongsTo(models.Anuncio,{
            as: 'Anuncio',
            foreignKey:'anuncio_id'
        })
    }
    return InteresseAdocao
}