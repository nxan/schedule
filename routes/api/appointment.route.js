const express = require('express');
const router = express.Router();

const Appointment = require('../../model/appointment');

router.get('/', async (req, res) => {
    try {
        const service = await Appointment.findAll();                
        res.json(service);        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', async (req, res) => {
    const { date_created, employee_created, client_id, employee_id, start_time,
             end_time_expected, end_time, price_full, discount, price_final,
            canceled, cancel_reason, shop_id }

    try {
        console.log(req.body);
        
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})