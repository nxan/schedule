const express = require('express');
const router = express.Router();
const { Op } = require("sequelize");
const bcrypt = require('bcryptjs');

const Customers = require('../../model/customers');

router.get('/', async (req, res) => {
    try {
        const customers = await Customers.findAll();   
        res.json(customers);        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', async(req, res) => {
    const {fullname, shop_url, psword, email, phone_contact} = req.body;
    
    try {
        console.log(req.body)
        let customer = await Customers.findOne({
            where: {
                [Op.or]: [
                  { shop_url: shop_url },
                  { email: email },
                  { phone_contact: phone_contact }
                ]
              }
        })
        
        if(customer) {
            return res.status(400).json({ errors: [{ message: 'Customer already exists. Duplicate shop_url or email or phone_contact.' }] })
        }
        
        customer = new Customers({
            fullname, shop_url, psword, email, phone_contact
        })
        const salt = await bcrypt.genSalt(10);
        customer.psword = await bcrypt.hash(psword, salt);
        await customer.save();
        res.json(customer);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
})


module.exports = router;