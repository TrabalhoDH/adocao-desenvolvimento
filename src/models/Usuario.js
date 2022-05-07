module.exports=(sequelize,DataType)=>{
    const Usuario = sequelize.define('Usuario',{
        id_usuario:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        nome:{
            type:DataType.STRING,
            allowNull:false,
        },
        email:{
            type:DataType.STRING,
            allowNull:false,
        },
        senha:{
            type:DataType.STRING,
            allowNull:false,
        },
        cpf:{
            type:DataType.INTEGER,
            allowNull:false,
        },
        genero:{
            type:DataType.STRING,
            allowNull:false,
        },
        data_nasc:{
            type:DataType.DATE,
            allowNull:false,
        },
        criado_em:{
            type:DataType.DATE,
            allowNull:false,
        },
    },{
        tableName:'usuarios',
        timestamps: false
    })
    return Usuario
}

