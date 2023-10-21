const { Carnes: carnesModel } = require('../models/Carnes')

const CarnesController = {

    create: async(req, res) => {

        try {
            
            const carnes = {
                tipo: req.body.tipo
            }

            const response = await carnesModel.create(carnes)
            res.status(201).json({response, msg:"Tipo de carne adicionada ao Menu!"})

        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {

        try {
            
            const response = await carnesModel.find()
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = CarnesController