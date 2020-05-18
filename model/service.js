const Sequelize = require('sequelize');
const db = require('../config/db');

const Service = db.define('service', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    service_name: {
        type: Sequelize.STRING,
    },
    duration: {
        type: Sequelize.INTEGER,
    },
    price: {
        type: Sequelize.DECIMAL,
    },
    shop_id: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Service;