const router = require('express').Router()

const opcionaisController = require('../controllers/opcionaisController')

router.route('/opcionais').post((req, res) => {
    opcionaisController.create(req, res)
})

router.route('/opcionais').get((req, res) => {
    opcionaisController.getAll(req, res)
})

module.exports = router