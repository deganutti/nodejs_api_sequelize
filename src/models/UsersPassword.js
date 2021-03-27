const { Sequelize, Model, DataTypes } = require('sequelize');

const md5 = require('md5');
class UsersPassword extends Model {
    static init(sequelize) {
        super.init({
            password: md5(DataTypes.STRING),
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsTo(models.Users, {
            foreignKey: 'userId',
            as: 'usersPassword'
        });
    };
};

module.exports = UsersPassword;