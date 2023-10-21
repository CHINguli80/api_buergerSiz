const router = require('express').Router()

const carnesController = require('../controllers/carnesController')

router.route("/carnes").post((req, res) => {
    carnesController.create(req, res)
})

router.route('/carnes').get((req, res) => {
    carnesController.getAll(req, res)
})
module.exports = router