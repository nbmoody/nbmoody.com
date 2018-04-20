const mongoose = require('mongoose');
const projectsModel = mongoose.model('projectsModel');

const projectsList = function (req, res) {
  res
    .status(200)
    .json({"status": "success"});
};
const projectsCreate = function (req, res) {
  res
    .status(200)
    .json({"status": "success"});
};
const projectsReadOne = function (req, res) {
  res
    .status(200)
    .json({"status": "success"});
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
