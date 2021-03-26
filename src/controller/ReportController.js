const User = require('../models/User');
const { Op } = require('sequelize');
module.exports = {
    async show(req, res) {
        const users = await User.findAll({
            attributes: ['name', 'email'],
            where: {
                email: {
                    [Op.iLike]: '%outlook.com.br',
                }
            },
            include: [{
                    association: 'addresses',
                    where: { street: 'Rua José Marti' },
                    and: { number: '66' }

                },
                {
                    association: 'techs',
                    required: false,
                    where: {
                        techsName: {
                            [Op.iLike]: '%Fi%'
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