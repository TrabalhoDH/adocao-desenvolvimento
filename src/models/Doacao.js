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
        criado_em: {
            type: DataType.DATE,
            allowNull: false
        }

    }, {
        tableName: 'doacoes',
        timestamps: false
    });
}
