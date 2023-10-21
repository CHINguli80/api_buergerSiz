const { Status: statusModel } = require("../models/Status")
 
const statusController = {

    create: async(req, res) => {
        try {
            const status = {
                tipo: req.body.tipo
            }

            const response = await statusModel.create(status)
            res.status(201).json({response, msg:"Status adicionado!"})
        } catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {

        try {
            
            const response = await statusModel.find()
            res.json(response)
        } catch (error) {
            console.log(error)
        }
    }
}

module.exports = statusController