const express = require('express');
const router = express.Router();

const ServiceBooked = require('../../model/service_booked');
const Appointment = require('../../model/appointment');
const Client = require('../../model/client');
const Employee = require('../../model/employee');
const Customers = require('../../model/customers');

Appointment.hasMany(ServiceBooked, { foreignKey: 'appointment_id', sourceKey: 'id' });
ServiceBooked.belongsTo(Appointment, { foreignKey: 'appointment_id', targetKey: 'id' });

router.get('/', async (req, res) => {
    try {
        const service_booked = await ServiceBooked.findAll({
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
                }],
                attributes: {
                    exclude: ['employee_created', 'employee_id', "client_id", "shop_id"]
                }
            }],
            attributes: {
                exclude: ["appointment_id"]
            }
        });                
        res.json(service_booked);        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;