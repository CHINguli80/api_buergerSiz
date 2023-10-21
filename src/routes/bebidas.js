const router = require('express').Router()

const bebidasController = require('../controllers/bebidasController')

router.route('/bebidas').post((req, res) => {
    bebidasController.create(req, res)
})

router.route('/bebidas').get((req, res) => {
    bebidasController.getAll(req, res)
})

module.exports = router