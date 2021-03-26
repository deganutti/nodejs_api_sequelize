const { Sequelize, Model, DataTypes } = require('sequelize');

class UsersAddresses extends Model {
    static init(sequelize) {
        super.init({
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER,
            city: DataTypes.STRING,
            state: DataTypes.STRING,
            country: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'owner'
        });
    };
};

module.exports = UsersAddresses;