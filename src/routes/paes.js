const router = require("express").Router()

const paesController = require("../controllers/paesController")

router.route("/paes").post((req, res) => 
paesController.create(req, res));

router.route('/paes').get((req, res) => {
    paesController.getAll(req, res)
})
module.exports = router