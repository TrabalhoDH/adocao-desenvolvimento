module.exports = (sequelize, DataType) => {
    return sequelize.define('Adocao', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        criado_em: {
            type: DataType.INTEGER,
            allowNull: false
        },
    }, {
        tableName: 'adocao',
        timestamps: false,
    });
}