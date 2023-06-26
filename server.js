const express = require("express")

const app = express()

const port = 6000;
app.use("/",require("./routes/projectRouter"))

app.listen(port,(req,res)=>{
    console.log("Server running at", port)
})