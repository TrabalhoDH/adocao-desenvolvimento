
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
    },
    
    {
        tableName:'usuarios',
        timestamps: false,
        createdAt: 'criado_em',
        updatedAt: false
    }
    )

    Usuario.associate = (models)=>{
        Usuario.hasMany(models.Animal,{
            as: 'Animal',
            foreignKey: 'usuarios_id'
        });
    }


    return Usuario
}


