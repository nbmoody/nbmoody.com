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
  res
    .status(200)
    .json({"status": "success"});
};

const projectsDeleteOne = function (req, res) {
  res
    .status(200)
    .json({"status": "success"});
};


module.exports = {
  projectsList,
  projectsCreate,
  projectsReadOne,
  projectsUpdateOne,
  projectsDeleteOne
};
