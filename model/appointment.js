const Sequelize = require('sequelize');
const db = require('../config/db');

const Appointment = db.define('appointment', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date_created: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },
    employee_created: {
        type: Sequelize.INTEGER
    },
    client_id: {
        type: Sequelize.INTEGER
    }, 
    employee_id: {
        type: Sequelize.INTEGER
    },
    start_time: {
        type: Sequelize.DATE
    },
    end_time_expected: {
        type: Sequelize.DATE
    },
    end_time: {
        type: Sequelize.DATE
    },
    price_expected: {
        type: Sequelize.DECIMAL
    },
    price_full: {
        type: Sequelize.DECIMAL
    },
    discount: {
        type: Sequelize.DECIMAL
    }, 
    price_final: {
        type: Sequelize.DECIMAL
    },
    canceled: {
        type: Sequelize.TINYINT
    },
    cancellation_reason: {
        type: Sequelize.STRING
    },
    shop_id: {
        type: Sequelize.INTEGER
    }
}, {
        timestamps: false,
        freezeTableName: true
    }
);

module.exports = Appointment;