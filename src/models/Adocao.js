module.exports = (sequelize, DataType) => {
    return sequelize.define('Adocao', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        criadoEm: {
            type: DataType.DATE,
            allowNull: false,
            field: 'criado_em'
        },
    }, {
        tableName: 'adocao',
        timestamps: true,
        createdAt: 'criadoEm',
        updatedAt: false
    });
}