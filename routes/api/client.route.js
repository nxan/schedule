const express = require('express');
const router = express.Router();

const Client = require('../../model/client');

router.get('/', async (req, res) => {
    try {
        const client = await Client.findAll();                
        res.json(client);        
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', async(req, res) => {
    const {client_name, contact_mobile, contact_mail} = req.body;
    
    try {
        console.log(req.body)
        let client = await Client.findOne({
            where: { contact_mobile }
        })
        
        if(client) {
            return res.status(400).json({ errors: [{ message: 'Client already exists' }] })
        }
        
        client = new Client({
            client_name, contact_mail, contact_mobile
        })

        await client.save();
        res.json(client);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
      }
})


module.exports = router;