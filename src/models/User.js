const { Sequelize, Model, DataTypes } = require('sequelize');

class Users extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.hasMany(models.UsersAddresses, {
            foreignKey: 'userId',
            as: 'addresses'
        });
        this.belongsToMany(models.Techs, {
            foreignKey: 'userId',
            through: 'UserTechs',
            as: 'techs'
        });
    };

};

module.exports = Users;