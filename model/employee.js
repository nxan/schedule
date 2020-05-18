const Sequelize = require('sequelize');
const db = require('../config/db');

const Employee = db.define('employee', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true

    },
    fullname: {
        type: Sequelize.STRING,
    },
    time_week: {
        type: Sequelize.DOUBLE
    },
    shop_id: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Employee;