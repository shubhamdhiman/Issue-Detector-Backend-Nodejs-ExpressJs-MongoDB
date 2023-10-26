require('dotenv').config();
const mongoose = require("mongoose")

// Making Connecting with mongoDB
const connectDb = async ()=>{
    try{
        const connect = await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database Connected: ", connect.connection.name)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}
// Exporting the function 
module.exports = connectDb;
