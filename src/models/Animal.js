const { DataType } = require('sequelize');
module.exports = (sequelize, DataType) => {
    const Animal = sequelize.define('Animal', {
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        raca: {
            type: DataType.STRING,
            allowNull: false,
        },
        porte: {

            type: DataType.STRING,
            allowNull: false
        },
        cor: {
            type: DataType.STRING,
            allowNull: false
        },
        criado_em: {
            type: DataType.DATE,
            allowNull: false
        },
        tipo: {
            type: DataType.STRING,
        },
        genero: {
            type: DataType.STRING,
        },
        idade: {
            type: DataType.DATE
        },
        pelagem: {
            type: DataType.STRING,
        },
        nome: {
            type: DataType.STRING,
        },
        castrado: {
            type: DataType.STRING
        },
        vacinado: {
            type: DataType.STRING
        },
        usuario_id: {
            type: DataType.INTEGER,
            foreignKey: true
        },
    },

        {
            tableName: 'animais',
            timestamps: true,
            createdAt: 'criado_em',
            updatedAt: false
        });

    Animal.associate = (models) => {
        Animal.belongsTo(models.Usuario, {
            as: 'Usuario',
            foreignKey: 'usuario_id'
        });
        Animal.hasMany(models.Foto, {
            as: 'Fotos',
            foreignKey: 'animal_id'
        })
    }

    return Animal
}