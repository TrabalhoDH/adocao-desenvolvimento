module.exports = (sequelize, DataType) => {
    return sequelize.define('Doacao', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        valor: {
            type: DataType.INTEGER,
            allowNull: false,
        },
        criadoEm: {
            type: DataType.DATE,
            allowNull: false,
            field: 'criado_em'
        },
    }, {
        tableName: 'doacoes',
        timestamps: true,
        createdAt: 'criadoEm',
        updatedAt: false,
    });
}
