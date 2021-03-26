const Users = require('../models/User');
const UserAddresses = require('../models/UserAddress');
module.exports = {

    /**
     * List users from database
     */
    async index(req, res) {
        const { userId } = req.params;
        const user = await Users.findByPk(userId, {
            include: {
                association: 'addresses'
            }
        });

        if (!user) {
            return res.status(400).json({
                error: 'User not found!'
            });
        }
        const address = await UserAddresses.findAll({
            where: { userId }
        });

        return res.json(user);
    }, //não esquecer a virgula...
    /**
     * New users save to database
     */
    async store(req, res) {
        const { userId } = req.params;
        const { zipcode, street, number, city, state, country } = req.body;

        /**
         * Validate exists user from API
         */
        const user = await Users.findByPk(userId);

        if (!user) {
            return res.status(400).json({
                error: 'User not found!'
            });
        }
        const address = await UserAddresses.create({
            userId,
            zipcode,
            street,
            number,
            city,
            state,
            country
        });

        return res.json(address);
    }
};