const ProjectModel = require("../models/projectModel")
const asyncHandler = require("express-async-handler")


const homePage = asyncHandler( async (req,res)=>{
    let allProjects = await ProjectModel.find({}).sort('-createdAt')
    // res.status(200).json({message:"Home Page"})
    res.render('homePage',{title:"Issue Tracker || Home ",allProjects})
})


const createProjectPage = asyncHandler( async (req,res)=>{
    // res.status(200).json({message:"create project page"})
    res.render('createProject',{title:"Issue Tracker || Create Project "})
})


const createProject = asyncHandler( async (req,res)=>{
    // console.log("this is req.body: ", req.body)
    const project = await ProjectModel.create({
        projectName:req.body.projectName,
        description:req.body.description,
        authorName:req.body.authorName
    })
    await project.save()
    // res.status(200).json({message:"create project page"})

    // res.render('createProject',{title:"Issue Tracker || Create Project "})
    // res.send(project)
    res.redirect('/')
})
const projectDetails = asyncHandler( async (req,res)=>{
    // res.status(200).json({message:"project details Page"})
    const project = await ProjectModel.findById(req.params.id)
    console.log(project)
    // console.log(req.params)
    res.render('projectDetails',{title:"Issue Tracker || Details ",project})
})
const createIssue = asyncHandler( async (req,res)=>{
    // res.status(200).json({message:"create issue Page"})
    res.render('createIssue',{title:"Issue Tracker || Create Issue "})
})
module.exports = {homePage, createProjectPage, createProject, projectDetails, createIssue}  