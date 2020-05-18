const Sequelize = require('sequelize');
const db = require('../config/db');

const Client = db.define('client', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    client_name: {
        type: Sequelize.STRING
    },
    contact_mobile: {
        type: Sequelize.STRING
    },
    contact_mail: {
        type: Sequelize.STRING
    },     
}, {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Client;