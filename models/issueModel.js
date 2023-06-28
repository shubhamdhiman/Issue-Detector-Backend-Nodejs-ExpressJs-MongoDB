const mongoose = require("mongoose")

const issueSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    label:{
        type:String,
        required:true,
    },
    issueAuthor:{
        type:String,
        required:true,
    }
},{
    timestamps:true,
})

module.exports = mongoose.model('Issue',issueSchema)