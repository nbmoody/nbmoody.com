const mongoose = require('mongoose');
const projectsModel = mongoose.model('projectsModel');


/*--------CONTROLLERS-------------------------*/
const projectsList = function (req, res) {
  projectsModel
    .find()
    .exec((err, projects) => {
      if(!projects) {
        res
          .status(404)
          .json({
            "message": "No projects found"
          });
        console.log("No projects were found in the DB collection (so if they are there, there must be a connection/query issue).");
        return;
      } else if(err) {
        res
          .status(404)
          .json(err);
        console.log("Error returned by Mongoose as it interacted with DB: " + err);
        return;
      }
      res
        .status(200)
        .json(projects);
    });
};

const projectsCreate = function (req, res) {
  projectsModel.create(
    // This first takes some data (must fit the validation in the schema!)
    {imagePath: req.body.imagePath,
      title: req.body.title,
      linkURL: req.body.linkURL,
      tags: req.body.tags.split(","),
      summary: req.body.summary
    },
    // Then the .create takes a callback function, which responds to the POST accordingly.
    (err, project) => {
    if(err) {
      res
        .status(400)
        .json(err);
      console.log("Error thrown: " + err);
    } else {
      res
        .status(201)
        .json(project);
      console.log("Success! Document created: " + project.title);
    }
  });
};

const projectsReadOne = function (req, res) {
  if(req.params && req.params.projectid) {
    projectsModel
      .findById(req.params.projectid)
      .exec((err, project) => {
        if(!project) {
          res
            .status(404)
            .json({
              "message": "projectid not found"
            });
          console.log("No projectid was found in the GET request and stored in the req.params object.");
          return;
        } else if(err) {
          res
            .status(404)
            .json(err);
          console.log("Error returned by Mongoose as it interacted with DB: " + err);
          return;
        }
        res
          .status(200)
          .json(project);
      });
  } else {
    res
      .status(404)
      .json({
        "message": "No projectid in request"
      });
  }
};

const projectsUpdateOne = function (req, res) {
  if(!req.params.projectid) {
    res
      .status(404)
      .json({
        "message": "projectid not found in paramters."
      });
    console.log("Error: projectid was not in the paramters passed with the request.");
    return;
  }
  projectsModel
    .findById(req.params.projectid)
    .select()
    .exec((err, project) => {
      if(!project) {
        res
          .status(404)
          .json({
            "message": "project not found under that id."
          });
        console.log("Error: No project was found under that ID.");
        return;
      } else if(err) {
        res
          .status(400)
          .json(err);
        console.log("Error: " + err);
        return;
      }
      project.imagePath = req.body.imagePath;
      project.title = req.body.title;
      project.linkURL = req.body.linkURL;
      project.tags = req.body.tags.split(",");
      project.summary = req.body.summary;
      project.save((err, project) => {
        if(err) {
          res
            .status(404)
            .json(err);
          console.log("Error when trying to save: " + err);
        } else {
          res
            .status(200)
            .json(project);
          console.log("Success! Document update:" + project.title);
        }
      });
    }
  );
};

const projectsDeleteOne = function (req, res) {
  const projectid = req.params.projectid;
  if(projectid) {
    projectsModel
      .findByIdAndRemove(projectid)
      .exec((err, project) => {
        if(err) {
          res
            .status(404)
            .json(err);
          console.log("Error: " + err);
          return;
        }
        res
          .status(204)
          .json(null);
        console.log("Success! Document Deleted: " + projectid);
      }
    );
  } else {
    res
      .status(404)
      .json({
        "message": "No projectid"
      });
  }
};


module.exports = {
  projectsList,
  projectsCreate,
  projectsReadOne,
  projectsUpdateOne,
  projectsDeleteOne
};
