const User = require('../models/User');
const { Op } = require('sequelize');
module.exports = {
    async show(req, res) {
        const { emailUser, streetUser, techsUser } = req.body;

        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: emailUser,
                }
            },
            include: [{
                    association: 'addresses',
                    required: false,
                    where: {
                        street: {
                            [Op.iLike]: streetUser
                        }
                    }

                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        techsName: {
                            [Op.iLike]: techsUser
                        }
                    }
                }
            ]
        });
        return res.json(
            users
        );
    }
};