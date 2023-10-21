const { Bebidas: bebidasModel } = require('../models/Bebidas')

const bebidasController = {

    create: async(req, res) => {

        try {
            
            const bebidas = {
                tipo: req.body.tipo
            }

            const response = await bebidasModel.create(bebidas)
            res.status(201).json({response, msg:"Bebida adicionada ao Menu!"})
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {

        try {
            
            const response = await bebidasModel.find()
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = bebidasController