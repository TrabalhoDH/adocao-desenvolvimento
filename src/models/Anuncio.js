module.exports = (sequelize, DataType) => {
    const Anuncio = sequelize.define('Anuncio', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        criado_em: {
            type: DataType.DATE,
            allowNull: false,
        },
        mensagem: {
            type: DataType.STRING,
        },
        usuario_id: {
            type: DataType.INTEGER,
            foreignKey: true
        },
        animal_id: {
            type: DataType.INTEGER,
            foreignKey: true
        }
    }, {
        tableName: 'anuncios',
        timestamps: true,
        createdAt: 'criado_em',
        updatedAt: false,

    });

    Anuncio.associate = (models) => {
        Anuncio.belongsTo(models.Animal, {
            as: 'Animal',
            foreignKey: 'animal_id'
        });
    }

    return Anuncio;
}