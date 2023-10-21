const mongoose = require("mongoose")
const { Schema } = mongoose

const statusSchema = new Schema({
    tipo: {
        type: String,
        required: true
    }
},
    {timestamps: true}
)

const Status = mongoose.model("Status", statusSchema)

module.exports = {
    Status
}