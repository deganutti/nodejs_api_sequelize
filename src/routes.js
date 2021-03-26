const express = require('express');
const UserController = require('./controller/UserController');
const UserAddressesController = require('./controller/UserAddressesController');
const TechsController = require('./controller/TechController');
const ReportController = require('./controller/ReportController');


const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({
        Application: 'MTC Mercury',
        Version: '1.0.0'
    });
});

/**
 * Router from new users of API
 */
routes.post('/users', UserController.store);

/**
 * Router from list users
 */
routes.get('/users', UserController.index);

routes.get('/users/:userId/addresses', UserAddressesController.index);
routes.post('/users/:userId/addresses', UserAddressesController.store);

routes.get('/users/:userId/techs', TechsController.index);
routes.post('/users/:userId/techs', TechsController.store);
routes.delete('/users/:userId/techs', TechsController.delete);

routes.get('/report', ReportController.show);




module.exports = routes;