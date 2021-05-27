const Users = require('../models/User');
const UsersPassword = require('../models/UsersPassword');
const { Op } = require('sequelize');

module.exports = {
    /**
     * List users from database
     */
    async index(req, res) {
        const { userId } = req.params;
        const user = await Users.findByPk(userId, {
            include: {
                association: 'password'
            }
        });
        if (!user) {
            return res.status(400).json({
                error: 'User not found!'
            });
        }
        const usersPassword = await UsersPassword.findAll({
            where: { userId }
        });
        return res.json(user);
    }, //não esquecer a virgula...
    /**
     * New users save to database
     */
    async store(req, res) {
        const { userId } = req.params;
        const { password } = req.body;
        /**
         * Validate exists user from API
         */
        const user = await Users.findByPk(userId);
        if (!user) {
            return res.status(400).json({
                error: 'User not found!'
            });
        };
        const passwordExists = await UsersPassword.findAll({
            attributes: ['userId'],
            where: {
                userId: userId,
            },
        });
        if (!passwordExists) {
            const passwordUser = await UsersPassword.findOrCreate({
                userId,
                password
            });
            return res.json(passwordUser);
        } else {
            return res.json({
                usersPassword: 'Password is exists. => ' +userId
            });
        }
    }
};