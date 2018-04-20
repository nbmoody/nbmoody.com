const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/apiControllers');

// projects
router
  .route('/projects')
  .get(apiCtrl.projectsList) // Get a list of all projects
  .post(apiCtrl.projectsCreate); // Create a new project

router
  .route('/projects/:projectid')
  .get(apiCtrl.projectsReadOne) // Get a single project.
  .put(apiCtrl.projectsUpdateOne) // Update a single project.
  .delete(apiCtrl.projectsDeleteOne); // delete a single project.

module.exports = router;
