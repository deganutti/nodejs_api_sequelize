const Users = require('../models/User');
module.exports = {

    /**
     * List users from database
     */
    async index(req, res) {
        const users = await Users.findAll();

        return res.json(users);
    }, //não esquecer a virgula...
    /**
     * New users save to database
     */
    async store(req, res) {
        const { name, email } = req.body;

        const users = await Users.create({ name, email });

        return res.json(users);
    }
};