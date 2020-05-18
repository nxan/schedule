const Sequelize = require('sequelize');
const db = require('../config/db');

const Schedule = db.define('schedule', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    employee_id: {
        type: Sequelize.DATE
    },
    appointment_from: {
        type: Sequelize.DATE
    },
    appointment_to: {
        type: Sequelize.DATE
    }
}, {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Schedule;