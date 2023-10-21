const mongoose = require('mongoose')
const { Schema } = mongoose;

const carnesSchema = new Schema({
    tipo: {
        type: String,
        required: true
    }
},
    {timestamps: true}
)

const Carnes = mongoose.model("Carnes", carnesSchema)

module.exports = {
    Carnes,
    carnesSchema
}