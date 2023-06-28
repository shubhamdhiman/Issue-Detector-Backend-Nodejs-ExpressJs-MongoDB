const express = require("express");
const {
  homePage,
  createProjectPage,
  createProject,
  projectDetails,
  createIssue,
} = require("../controllers/projectController");
const router = express.Router();

router.route("/").get(homePage);
router.route("/create_project").get(createProjectPage).post(createProject);
router.route("/project_details/:id").get(projectDetails);
router.route("/create_issue/:id").get(createIssue);

module.exports = router;