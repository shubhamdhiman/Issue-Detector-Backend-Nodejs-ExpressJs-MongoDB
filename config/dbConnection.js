const mongoose = require("mongoose")

const connectDb = async ()=>{
    try{
        const connect = await mongoose.connect("mongodb+srv://admin:admin@shubhamcluster.ieolx9t.mongodb.net/IssueTracker?retryWrites=true&w=majority")
        console.log("Database Connected: ", connect.connection.name)
    }
    catch(err){
        console.log(err)
        process.exit(1)
    }
}
module.exports = connectDb;