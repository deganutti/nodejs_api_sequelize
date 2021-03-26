const { Sequelize, Model, DataTypes } = require('sequelize');

class Techs extends Model {
    static init(sequelize) {
        super.init({
            techsName: DataTypes.STRING,
        }, {
            sequelize
        });
    }
    static associate(models) {
        this.belongsToMany(models.Users, {
            foreignKey: 'techsId',
            through: 'UserTechs',
            as: 'Users'
        });
    };
};

module.exports = Techs;