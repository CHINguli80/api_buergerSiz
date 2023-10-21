const mongoose = require('mongoose')

const { Schema } = mongoose;

const acompanhanteSchema = new Schema({
    tipo: {
        type: String,
        required: true
    }
}, 
    {timestamps: true}
)

const Acompanhantes = mongoose.model("Acompanhantes", acompanhanteSchema)

module.exports = {
    Acompanhantes,
    acompanhanteSchema
}