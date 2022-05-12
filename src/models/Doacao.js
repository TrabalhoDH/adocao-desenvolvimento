module.exports=(sequelize,DataType)=>{
    const Doacao = sequelize.define('Doacao',{
        id:{
            type:DataType.INTEGER,
            primaryKey:true,
            autoIncrement:true
        },
        valor:{
            type:DataType.INTEGER,
            allowNull:false,
        },
        criado_em:{
            type:DataType.DATE,
            allowNull:false
        }
        
    },{
        tableName:'doacoes',
        timestamps: false
    })
    return Doacao
}
