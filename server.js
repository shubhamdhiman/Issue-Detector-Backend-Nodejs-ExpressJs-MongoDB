const express = require("express")
const path = require('path');
const connectDb = require("./config/dbConnection");
connectDb();
const app = express()

const port = 5000;

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use("/",require("./routes/projectRouter"))

app.listen(port,(req,res)=>{
    console.log("Server running at", port)
})