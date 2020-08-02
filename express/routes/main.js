const router = require('express').Router();

router.get('/', (req, res) => {     // http://miDominio.com/
    res.send('La API funciona.');
});

module.exports = router;