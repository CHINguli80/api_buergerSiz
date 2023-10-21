const mongoose = require("mongoose")
const { Schema } = mongoose

const paesSchema = new Schema({
    tipo: {
        type: String,
        required: true
    }
},
    {timestamps: true}
)

const Paes = mongoose.model("Paes", paesSchema)

module.exports = {
    Paes,
    paesSchema
}