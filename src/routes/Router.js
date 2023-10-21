const router = require('express').Router()

const paesRouter = require('./paes')
const carnesRouter = require('./carnes')
const opcionaisRouter = require('./opcionais')
const bebidasRouter = require('./bebidas')
const acompanhantesRouter = require('./acompanhantes')
const statusRouter = require('./status')
const buergerRouter = require('./buerger')

router.use("/", paesRouter)
router.use("/", carnesRouter)
router.use("/", opcionaisRouter)
router.use("/", bebidasRouter)
router.use("/", acompanhantesRouter)
router.use("/", statusRouter)
router.use("/", buergerRouter)

module.exports = router;