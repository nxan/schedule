const express = require('express');
const router = express.Router();

const Appointment = require('../../model/appointment');
const ServiceBooked = require('../../model/service_booked');
const Employee = require('../../model/employee');
const Customers = require('../../model/customers');
const Client = require('../../model/client');

Employee.hasMany(Appointment, { foreignKey: 'employee_created', sourceKey: 'id', as: 'created_by' });
Appointment.belongsTo(Employee, { foreignKey: 'employee_created', targetKey: 'id', as: 'created_by' });

Employee.hasMany(Appointment, { foreignKey: 'employee_id', sourceKey: 'id', as: 'employee' });
Appointment.belongsTo(Employee, { foreignKey: 'employee_id', sourceKey: 'id', as: 'employee' });

Client.hasMany(Appointment, { foreignKey: 'client_id', sourceKey: 'id' });
Appointment.belongsTo(Client, { foreignKey: 'client_id', targetKey: 'id' });

Customers.hasMany(Appointment, { foreignKey: 'shop_id', sourceKey: 'id' });
Appointment.belongsTo(Customers, { foreignKey: 'shop_id', targetKey: 'id' });

router.get('/', async (req, res) => {
    
    try {
        const appointment = await Appointment.findAll({
            include: [{
                model: Employee, as: 'created_by',
            }, {
                model: Employee, as: 'employee',
            }, {
                model: Client
            }, {
                model: Customers
            }],
            attributes: {
                exclude: ['employee_created', 'employee_id', "client_id", "shop_id"]
            }
        });                
        res.json(appointment);        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', async (req, res) => {
    const { date_created, employee_created, client_id, employee_id, start_time,
             end_time_expected, end_time, price_expected, price_full, discount, price_final,
            canceled, cancellation_reason, shop_id, service_id, price } = req.body;
        
    try {
        console.log(req.body);
        let appointment = new Appointment({
            date_created, employee_created, client_id, employee_id, start_time,
            end_time_expected, end_time, price_expected, price_full, discount, price_final, canceled,
            cancellation_reason, shop_id
        })
        await appointment.save();

        let service_booked = new ServiceBooked({
            appointment_id: appointment.id,
            service_id: service_id,
            price: price
        })
        await service_booked.save();
        res.json(service_booked);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;