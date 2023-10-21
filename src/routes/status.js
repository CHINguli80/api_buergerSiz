const router = require('express').Router()

const statusController = require('../controllers/statusController')

router.route('/status').post((req, res) => {
    statusController.create(req, res)
})

router.route('/status').get((req, res) => {
    statusController.getAll(req, res)
})

module.exports = router