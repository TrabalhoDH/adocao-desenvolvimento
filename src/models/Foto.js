module.exports = (sequelize, DataType) => {
    return sequelize.define('Foto', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nome: {
            type: DataType.STRING,
            allowNull: false
        },
        caminho: {
            type: DataType.STRING,
            foreignKey: true,
        },
        criadoEm: {
            type: DataType.DATE,
            allowNull: false,
            field: 'criado_em'
        },
        idAnimal: {
            type: DataType.INTEGER,
            foreignKey: true,
            field: 'animal_id'
        },
    }, {
        tableName: 'fotos',
        timestamps: false,
        createdAt: 'criadoEm',
        updatedAt: false
    });
}