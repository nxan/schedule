const express = require('express');
const router = express.Router();

const Service = require('../../model/service');

router.get('/', async (req, res) => {
    try {
        const service = await Service.findAll();                
        res.json(service);        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', async(req, res) => {
    const { service_name, duration, price, shop_id } = req.body;

    try {
        console.log(req.body)
        let service = await Service.findOne({
            where: { service_name: service_name }
        })

        if(service) {
            return res.status(400).json({ errors: [{ message: 'Service already exists.' }] })
        }

        service = new Service({
            service_name, duration, price, shop_id
        })
        await service.save();
        res.json(service)
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;