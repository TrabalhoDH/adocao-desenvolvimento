module.exports = (sequelize, DataType) => {
    const InteresseAdocao = sequelize.define('InteresseAdocao', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        mensagem: {
            type: DataType.STRING,
            allowNull: false
        },
        criadoEm: {
            type: DataType.DATE,
            allowNull: false,
            field: 'criado_em'
        },
        idUsuario: {
            type: DataType.INTEGER,
            foreignKey: true,
            field: 'usuario_id'
        },
        idAnuncio: {
            type: DataType.INTEGER,
            foreignKey: true,
            field: 'anuncio_id'
        }
    }, {
        tableName: 'interesse_doacao',
        timestamps: false,
        criatedAt: 'criadoEm',
        updatedAt: false
    })

    InteresseAdocao.associate = (models) => {
        InteresseAdocao.belongsTo(models.Anuncio, {
            as: 'Anuncio',
            foreignKey: 'idAnuncio'
        })
    }

    return InteresseAdocao
}