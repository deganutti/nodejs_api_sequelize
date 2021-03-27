const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Users = require('../models/User');
const UserAddress = require('../models/UserAddress');
const Techs = require('../models/Techs');
const UserPassword = require('../models/UsersPassword');

const connection = new Sequelize(dbConfig);

Users.init(connection);
UserAddress.init(connection);
Techs.init(connection);
UserPassword.init(connection);


Users.associate(connection.models);
UserAddress.associate(connection.models);
Techs.associate(connection.models);
UserPassword.associate(connection.models);

module.exports = connection;