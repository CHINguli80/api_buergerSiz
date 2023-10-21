const { Acompanhantes: acompanhanteModel } = require('../models/Acompanhantes')

const acompanhantesController = {

    crete: async(req, res) => {

        try {
            const acompanhante = {
                tipo: req.body.tipo
            }

            const response = await acompanhanteModel.create(acompanhante)
            res.status(201).json({response, msg:"Acompanhante adicionado ao Menu!"})
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {

        try {
            
            const response = await acompanhanteModel.find()
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = acompanhantesController