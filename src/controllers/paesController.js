const { Paes: paesModel } = require("../models/Paes")

const paesController = {

    create: async(req, res) => {

        try {
            
            const pao = {
                tipo: req.body.tipo
            }

            const response = await paesModel.create(pao)

            res.status(201).json({response, msg:"Tipo de pão adicionado ao Menu!" })
        } catch (error) {
            console.log(error)
        }

    },

    getAll: async(req, res) => {

        try {
            
            const response = await paesModel.find()
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = paesController;