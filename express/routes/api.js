const Cryptocurrency = require('../models/Cryptocurrency');

const   router = require('express').Router(),
        { Cryptocurrency } = require('../models/Cryptocurrency'),
        axios = require('axios');

router.get('/api', (req, res) => {  // http://miDominio.com
    res.send(`La API funciona.`);
});

router.get('/api/:cryptocurrency', async (req, res) => {
    const cryptocurrencies = await Cryptocurrency.find({name});
    // const apiUrl = 
    const cfg = {
        method: 'GET',
        url: `https://www.bitstamp.net/api/ticker`
    };
    axios(cfg)
    .then(response => {
        Cryptocurrency.find 
    })
    .catch(err => {
        res.send({
            error: {
                human: `Error de comunicación entre Axios y Bitstamp API.`,
                system: err
            }
        });
    });
});

module.exports = router;