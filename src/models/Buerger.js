const mongoose = require("mongoose")

const { Schema } = mongoose;

const BuergerSchema = new Schema ({
    nome: {
        type: String,
        required: true
    },
    pao: {
        type: String,
        required: true
    },
    carne: {
        type: String,
        required: true
    },
    opcionais: {
        type: Array,
        required: true
    },
    bebida: {
        type: String,
        required: true
    },
    acompanhante: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
},
    {timestamps: true}
)

const Buerger = mongoose.model("Buerger", BuergerSchema)

module.exports = {
    Buerger
}