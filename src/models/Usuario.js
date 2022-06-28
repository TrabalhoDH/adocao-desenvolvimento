
module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataType.STRING,
            allowNull: false,
        },
        email: {
            type: DataType.STRING,
            allowNull: false,
        },
        senha: {
            type: DataType.STRING,
            allowNull: false,
        },
        cpf: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        genero: {
            type: DataType.STRING,
        },
        dataNascimento: {
            type: DataType.DATE,
            field: 'data_nasc'
        },
        criadoEm: {
            type: DataType.DATE,
            allowNull: false,
            field: 'criado_em'
        },
        telefone:{
         type: DataType.INTEGER,   
        },
        cidade:{
            type: DataType. STRING,
        },
        estado:{
            type: DataType.STRING,
        },
        rua:{
            type: DataType. STRING,
        }

    }, {
        tableName: 'usuarios',
        timestamps: true,
        createdAt: 'criadoEm',
        updatedAt: false
    }
    )

    Usuario.associate = (models) => {
        Usuario.hasMany(models.Animal, {
            as: 'Animal',
            foreignKey: 'idUsuario'
        })
        Usuario.hasMany(models.Anuncio, {
            as: 'Anuncio',
            foreignKey: 'idUsuario'
        })
        Usuario.hasMany(models.InteresseAdocao, {
            as: 'InteresseAdocao',
            foreignKey: 'idUsuario'
        })
    }

    return Usuario
}