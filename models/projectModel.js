const mongoose = require("mongoose")

const projectsSchema = new mongoose.Schema({

    projectName:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    authorName:{
        type:String,
        required:true,
    },
    issues:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Issue'
        }
    ], 
    labels:[
        {
            type:String,
        }
    ]
},{
    timestamps:true,
})

module.exports = mongoose.model('Project',projectsSchema)