const router = require('express').Router()

const buergerController = require('../controllers/buergerController')

router.route('/buergers').post((req, res) => {
    buergerController.create(req, res)
})

router.route('/buergers').get((req, res) => {
    buergerController.getAll(req, res)
})

router.route('/buergers/:id').delete((req, res) => {
    buergerController.delete(req, res)
})

router.route('/buergers/:id').patch((req, res) => {
    buergerController.update(req, res)
})

module.exports = router