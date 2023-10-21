const express = require('express')
const cors = require('cors')

const app = express()
const port =  process.env.PORT ? Number(process.env.PORT ) : 3000


app.use(express.json())
app.use(cors())
app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.header(
     "Access-Control-Allow-Headers",
     "Origin, X-Requested-With, Content-Type, Accept",
     "Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"
   );
   next();
 });
// DB Connection
const conn = require('./db/conn')

conn();

// Routes
const routes = require('./routes/Router')

   app.use("/api", routes)

 app.listen(port, () => {
    console.log("Servidor online")
 }) 