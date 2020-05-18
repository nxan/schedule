const Sequelize = require('sequelize');
const fs = require('fs');

const db = new Sequelize('schedule', 'nxan@schedule-e1804', 'Nguyenxuanan1811', {
    dialect: 'mysql',
    host: 'schedule-e1804.mysql.database.azure.com',
    timestamps: false,
    port: 3306,
    dialectOptions: {
        ssl: {
            ca: fs.readFileSync('./config/BaltimoreCyberTrustRoot.crt.pem')
        }
    }
});

module.exports = db;
