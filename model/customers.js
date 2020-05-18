const Sequelize = require('sequelize');
const db = require('../config/db');

const Customers = db.define('customers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    fullname: {
        type: Sequelize.STRING
    },
    shop_url: {
        type: Sequelize.STRING
    }, 
    psword: {
        type: Sequelize.STRING
    },       
    email: {
        type: Sequelize.STRING
    },
    phone_contact: {
        type: Sequelize.STRING
    }
}, {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Customers;