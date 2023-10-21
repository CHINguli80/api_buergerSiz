const mongoose = require('mongoose')
const { Schema } = mongoose

const opcionaisSchema = new Schema({
    tipo: {
        type: String,
        required: true
    }
},
    {timestamps: true}
)

const Opcionais = mongoose.model("Opcionais", opcionaisSchema)

module.exports = {
    Opcionais,
    opcionaisSchema
}