const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");

const Employee = require('../../model/employee');

router.get('/', async (req, res) => {
    try {
        const employee = await Employee.findAll();                
        res.json(employee);        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});


router.post('/', async(req, res) => {
    const { fullname, time_week, shop_id } = req.body;
    try {
        console.log(req.body);
        let employee = await Employee.findOne({
            where: {
                [Op.and]: [
                  { fullname: fullname },
                  { shop_id: shop_id }
                ]
              }
        })

        if(employee) {
            return res.status(400).json({ errors: [{ message: 'Employee already exists.' }] })
        }

        employee = new Employee({
            fullname, time_week, shop_id
        })
        await employee.save();
        res.json(employee)

    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})

module.exports = router;