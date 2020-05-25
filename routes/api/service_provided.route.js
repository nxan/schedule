const express = require('express');
const router = express.Router();

const ServiceProvided = require('../../model/service_provided');
const Appointment = require('../../model/appointment');
const Client = require('../../model/client');
const Employee = require('../../model/employee');
const Customers = require('../../model/customers');

Appointment.hasMany(ServiceProvided, { foreignKey: 'appointment_id', sourceKey: 'id' });
ServiceProvided.belongsTo(Appointment, { foreignKey: 'appointment_id', targetKey: 'id' });

router.get('/', async (req, res) => {
    try {
        const service_provided = await ServiceProvided.findAll({
            include: [{
                model: Appointment,
                include: [{
                    model: Client
                }, {
                    model: Employee, as: 'employee',
                }, {
                    model: Employee, as: 'created_by',
                }, {
                    model: Customers
                }]
            }]
        });                
        res.json(service_provided);        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;