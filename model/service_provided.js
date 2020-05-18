const Sequelize = require('sequelize');
const db = require('../config/db');

const ServiceProvided = db.define('service_provided', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    appointment_id: {
        type: Sequelize.INTEGER
    },
    service_id: {
        type: Sequelize.INTEGER
    },
    price: {
        type: Sequelize.DECIMAL
    }
}, {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = ServiceProvided;