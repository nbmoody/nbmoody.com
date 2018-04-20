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
  res
    .status(200)
    .json({"status": "success"});
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
