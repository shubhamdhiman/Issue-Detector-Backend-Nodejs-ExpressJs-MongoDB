const express = require("express");
const {
  homePage,
  createProject,
  projectDetails,
  createIssue,
} = require("../controllers/projectController");
const router = express.Router();

router.route("/").get(homePage);
router.route("/create_project").post(createProject);
router.route("/project_detail/:id").get(projectDetails);
router.route("/create_issue/:id").post(createIssue);

module.exports = router;
