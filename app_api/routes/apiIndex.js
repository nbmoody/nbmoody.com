const express = require('express');
const router = express.Router();
const apiCtrl = require('../controllers/apiControllers');

// projects
router
  .route('/projects')
  .get(apiCtrl.projectsList) // Get a list of all projects DONE
  .post(apiCtrl.projectsCreate); // Create a new project   DONE

router
  .route('/projects/:projectid')
  .get(apiCtrl.projectsReadOne) // Get a single project.   DONE
  .put(apiCtrl.projectsUpdateOne) // Update a single project. DONE
  .delete(apiCtrl.projectsDeleteOne); // delete a single project. Done

module.exports = router;
