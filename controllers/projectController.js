const asyncHandler = require("express-async-handler")
const homePage = asyncHandler( async (req,res)=>{
    // res.status(200).json({message:"Home Page"})
    res.render('homePage')
})
const createProject = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"create project page"})
})
const projectDetails = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"project details Page"})
})
const createIssue = asyncHandler( async (req,res)=>{
    res.status(200).json({message:"create issue Page"})
})
module.exports = {homePage, createProject, projectDetails, createIssue} 