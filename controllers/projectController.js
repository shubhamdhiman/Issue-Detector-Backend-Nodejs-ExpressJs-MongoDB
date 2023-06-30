const ProjectModel = require("../models/projectModel")
const IssueModel  = require("../models/issueModel")
const asyncHandler = require("express-async-handler")

// Home Page to show projects
const homePage = asyncHandler( async (req,res)=>{
    let allProjects = await ProjectModel.find({}).sort('-createdAt')
    // res.status(200).json({message:"Home Page"})
    res.render('homePage',{title:"Issue Tracker || Home ",allProjects})
})

// Create Project page
const createProjectPage = asyncHandler( async (req,res)=>{
    // res.status(200).json({message:"create project page"})

    res.render('createProject',{title:"Issue Tracker || Create Project "})
})

// Create Project (save form data)
const createProject = asyncHandler( async (req,res)=>{
    // console.log("this is req.body: ", req.body)
    const project = await ProjectModel.create({
        projectName:req.body.projectName,
        description:req.body.description,
        authorName:req.body.authorName
    })
    await project.save()
    // res.render('createProject',{title:"Issue Tracker || Create Project "})
    res.redirect('/')
})

// Project Details Page
const projectDetails = asyncHandler( async (req,res)=>{
    // res.status(200).json({message:"project details Page"})
    const project = await ProjectModel.findById(req.params.id).populate({path:"issues"})
    console.log(project) 
    res.render('projectDetails',{title:"Issue Tracker || Details ",project})
})

// Create Issue Page
const createIssuePage = asyncHandler( async (req,res)=>{
    const project = await ProjectModel.findById(req.params.id)
    // const project = await ProjectModel.findById(req.params.id)
    res.render('createIssue',{title:"Issue Tracker || Create Issue ", project})
})

// Create Issue (submit form data)
const createIssue = asyncHandler( async (req,res)=>{
    const project = await ProjectModel.findById(req.params.id)
    const issue = await IssueModel.create({
        title:req.body.title,
        description:req.body.description,
        label:req.body.label,
        issueAuthor:req.body.author
    })
    project.issues.push(issue)
    await project.save()
    await issue.save()
    res.redirect("back")
})
module.exports = {homePage, createProjectPage, createProject, projectDetails, createIssuePage, createIssue}  