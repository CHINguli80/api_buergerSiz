const mongoose = require("mongoose")

async function main() {

    try {
        
        mongoose.set("strictQuery", true)

        await mongoose.connect(
            process.env.DATABASE_URL || "mongodb+srv://moraisdomingos:CHINguli80@cluster0.4obnvse.mongodb.net/?retryWrites=true&w=majority"
        );

        console.log("Connectado ao banco")
    } catch (error) {
        console.log(`Erro: ${error}`)
    }
}

module.exports = main;