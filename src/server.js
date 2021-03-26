const express = require('express');

/**
 * Import ROUTES from arquive routes.js
 */
const routes = require('./routes');

/**
 * Import database connection
 */
require('./database');

/**
 * Start cont app, initinalizate application
 */
const app = express();

/**
 * Utiliti Express JSON from apllication comunication
 */
app.use(express.json());

/**
 * Utiliti routes
 */
app.use(routes);


/**
 * Port http from connection from API.
 * EX: 198.26.5.32:3333
 */
app.listen(3333);