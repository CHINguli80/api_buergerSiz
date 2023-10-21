const { Opcionais: opcionaisModel, Opcionais } = require('../models/Opcionais')

const opcionaisController = {

   create: async(req, res) => {

    try {

        const opcionais = {
            tipo: req.body.tipo
        }

        const response = await opcionaisModel.create(opcionais)
        res.status(201).json({response, msg:"Opcional adicionado ao Menu!"})

    } catch (error) {
        console.log(error)
    }

   },

   getAll: async(rq, res) => {

    try {
        
        const response = await opcionaisModel.find()
        res.json(response)
    } catch (error) {
        console.log(error)
    }
   }
}

module.exports = opcionaisController