const router = require('express').Router()
const Bill = require('../../models/Bill')

router.get('/', (req, res) => {
    
    Bill.findAll().then((billData) =>{
        res.json(billData)
    })
})