module.exports=(sequelize,DataType)=>{
    const Endereco = sequelize.define('Endereco',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        cep:{
            type:DataType.INTEGER,
            foreignKey:true,
        },
        logradouro:{
            type:DataType.STRING,
            allowNull:false,
        },
        numero:{
            type:DataType.INTEGER,
            foreignKey:true,
        },
        complemento:{
            type:DataType.STRING,
            allowNull:false
        },
        cidade:{
            type:DataType.STRING,
            allowNull:false
        },
        estado:{
            type:DataType.STRING,
            allowNull:false
        },
        usuario_id:{
            type:DataType.INTEGER,
            foreignKey:true,
        }
        

    },{
        tableName:'enderecos',
        timestamps:false
    })
    return Endereco
}