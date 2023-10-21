const { Buerger: buergerModel } = require('../models/Buerger')

const buergerController = {

    create: async(req, res) => {

        try {
            
            const buerger = {
                nome: req.body.nome,
                pao: req.body.pao,
                carne: req.body.carne,
                opcionais: req.body.opcionais,
                bebida: req.body.bebida,
                acompanhante: req.body.acompanhante,
                status: req.body.status
            }

            const response = await buergerModel.create(buerger)
            res.status(201).json({response, msg:"Buerger Solicitado!"})
            }            
         catch (error) {
            console.log(error)
        }
    },

    getAll: async(req, res) => {

        try {
            const response = await buergerModel.find()

            res.json(response)
        } catch (error) {
            console.log(error)
        }
    },

    delete: async(req, res) => {

        try {
            const id = req.params.id 

            const deleteBuerger = await buergerModel.findByIdAndDelete(id)

            res.status(200).json({deleteBuerger, msg:"Pedido cancelado com sucesso!"})
        } catch (error) {
            console.log(error)
        }
    },

    update: async(req, res) => {

        try {
            
            const id = req.params.id 

            const buerger = {
                status: req.body.status
            }

            const response = await buergerModel.findByIdAndUpdate(id, buerger)

            res.status(200).json({response, msg:"Status do pedido atualizado!"})

        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = buergerController