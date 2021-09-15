const router = require('express').Router();
const billRoute = require('./billRoute')

router.use('/bills', billRoute)

module.exports = router;

