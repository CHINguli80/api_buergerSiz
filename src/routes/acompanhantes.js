const router = require('express').Router()

const acompanhantesController = require('../controllers/acompanhatesController')

router.route('/acompanhante').post((req, res) => {
    acompanhantesController.crete(req, res)
})

router.route('/acompanhante').get((req, res) => {
    acompanhantesController.getAll(req, res)
})

module.exports = router