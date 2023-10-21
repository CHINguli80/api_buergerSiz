const mongoose = require("mongoose")
const { Schema } = mongoose;

const bebidaSchema = new Schema({
    tipo: {
        type: String,
        required: true
    }
},
    {timestamps: true}
)

const Bebidas = mongoose.model("Bebidas", bebidaSchema)

module.exports = {
    Bebidas,
    bebidaSchema
}