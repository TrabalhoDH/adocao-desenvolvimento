module.exports=(sequelize,DataType)=>{
    const Endereco = sequelize.define('Endereco',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true,
        },
        cep:{
            type:DataType.INTEGER,
            forgeinKey:true,
        },
        logradouro:{
            type:DataType.STRING,
            allowNull:false,
        },
        numero:{
            type:DataType.INTEGER,
            forgeinKey:true,
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
            forgeinKey:true,
        }
        

    },{
        tableName:'enderecos',
        timestamps:false
    })
    return Endereco
}