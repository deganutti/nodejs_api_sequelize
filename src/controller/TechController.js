const Users = require('../models/User');
const UserAddresses = require('../models/UserAddress');
const Techs = require('../models/Techs');
module.exports = {

    /**
     * List users from database
     */
    async index(req, res) {

        const { userId } = req.params;

        const user = await Users.findByPk(userId, {
            include: {
                association: 'techs',
                attributes: ['id', 'techsName'],
                through: {
                    attributes: ['userId']
                }
            }
        });
        return res.json(user.techs);
    }, //não esquecer a virgula...
    /**
     * New users save to database
     */
    async store(req, res) {
        const { userId } = req.params;
        const { techsName } = req.body;

        const user = await Users.findByPk(userId);

        if (!user) {
            return res.status(400).json({
                error: 'User not found!'
            });
        }

        const [techs] = await Techs.findOrCreate({
            where: { techsName }

        });
        await user.addTech(techs);

        return res.json(techs);
    },
    async delete(req, res) {
        const { userId } = req.params;
        const { techsName } = req.body;

        const user = await Users.findByPk(userId);

        if (!user) {
            return res.status(400).json({
                error: 'User not found!'
            });
        }

        const techs = await Techs.findOne({
            where: { techsName }
        });
        await user.removeTechs(techs);

        return res.json({ return: 'Delete complete' });
    }
};