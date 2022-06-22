module.exports = (sequelize, DataType) => {
    const Anuncio = sequelize.define('Anuncio', {
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
        mensagem: {
            type: DataType.STRING,
        },
        idUsuario: {
            type: DataType.INTEGER,
            foreignKey: true,
            field: 'usuario_id'
        },
        idAnimal: {
            type: DataType.INTEGER,
            foreignKey: true,
            field: 'animal_id'
        }
    }, {
        tableName: 'anuncios',
        timestamps: true,
        createdAt: 'criadoEm',
        updatedAt: false,

    });

    Anuncio.associate = (models) => {
        Anuncio.belongsTo(models.Animal, {
            as: 'Animal',
            foreignKey: 'idAnimal'
        });
    }

    return Anuncio;
}