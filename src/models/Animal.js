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
        criadoEm: {
            type: DataType.DATE,
            allowNull: false,
            field: 'criado_em'
        },
        tipo: {
            type: DataType.STRING,
        },
        genero: {
            type: DataType.STRING,
        },
        dataNascimento: {
            type: DataType.DATE,
            field: 'idade'
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
        idUsuario: {
            type: DataType.INTEGER,
            foreignKey: true,
            field: 'usuario_id'
        },
    }, {
        tableName: 'animais',
        timestamps: true,
        createdAt: 'criadoEm',
        updatedAt: false
    });

    Animal.associate = (models) => {
        Animal.belongsTo(models.Usuario, {
            as: 'Usuario',
            foreignKey: 'idUsuario'
        });
        Animal.hasMany(models.Foto, {
            as: 'Fotos',
            foreignKey: 'idAnimal'
        })
    }

    return Animal
}