module.exports=(sequelize,DataType)=>{
    const Foto = sequelize.define('Foto',{
        id_anuncio:{
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
            forgeinKey:true,
        },
        criado_em:{
            type:DataType.DATE,
            allowNull:false,
        },
        anuncio_id:{
            type:DataType.INTEGER,
            forgeinKey:true,
        }
        

    },{
        tableName:'fotos',
        timestamps:false
    })
    return Foto
}