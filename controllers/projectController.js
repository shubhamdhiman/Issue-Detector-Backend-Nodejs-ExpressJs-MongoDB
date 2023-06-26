const homePage = (req,res)=>{
    res.status(200).json({message:"Home Page"})
}
const createProject = (req,res)=>{
    res.status(200).json({message:"create project page"})
}
const projectDetails = (req,res)=>{
    res.status(200).json({message:"project details Page"})
}
const createIssue = (req,res)=>{
    res.status(200).json({message:"create issue Page"})
}
module.exports = {homePage, createProject, projectDetails, createIssue}