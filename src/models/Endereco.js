module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define('Endereco', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        cep: {
            type: DataType.INTEGER,
            foreignKey: true,
        },
        logradouro: {
            type: DataType.STRING,
            allowNull: false,
        },
        numero: {
            type: DataType.INTEGER,
            foreignKey: true,
        },
        complemento: {
            type: DataType.STRING,
            allowNull: false
        },
        cidade: {
            type: DataType.STRING,
            allowNull: false
        },
        estado: {
            type: DataType.STRING,
            allowNull: false
        },
        idUsuario: {
            type: DataType.INTEGER,
            foreignKey: true,
            field: 'usuario_id'
        },
    }, {
        tableName: 'enderecos',
        timestamps: false,
    })
    Endereco.associate = (models) => {
        Endereco.belongsTo(models.Usuario, {
            as: 'Usuario',
            foreignKey: 'idUsuario'
        })
    }

    return Endereco
}