
module.exports=(sequelize,DataType)=>{
    const Usuario = sequelize.define('Usuario',{
        id:{
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
            
        },
        data_nasc:{
            type:DataType.DATE,
            
        },
        criado_em:{
            type:DataType.DATE,
            
        },
        animais_id:{
            type:DataType.INTEGER,
            foreignKey:true
            
            
        },
    },
    
    {
        tableName:'usuarios',
        timestamps: false
    }
    )

    Usuario.associate = (models)=>{
        Usuario.hasMany(models.Animal,{
            as: 'Animal',
            foreignKey: 'usuarios_id'
        });
        
        Usuario.hasMany(models.Anuncio,{
            as: 'anuncios',
            foreignKey: 'usuarios_id'
        });
    }


    return Usuario
}


