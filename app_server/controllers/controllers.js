const request = require('request'); // Use the request package for http requests.

// Set the base-URL depending on the environment (dev vs. production)
const apiOptions = {
  server : 'http://localhost:3000'
};
/*if(process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://<hosting-environment-here>';
}*/

// Rendering function for the portoflio
const _renderPortfolio = function(req, res, responseBody){
  res.render('portfolio', {
    projects: responseBody
  });
};


/*------------CONTROLLERS-----------------*/
/* GET 'welcome' page */
const welcome = function(req, res) {
  res.render('welcome', {title:'Welcome'})
};

/* GET 'portfolio' page */
const portfolio = function(req, res) {
  const path = '/api/projects';
  const requestOptions = {
    url: apiOptions.server + path,
    method: 'GET',
    json: {},
    qs : {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      if(err) {
        _renderPortfolio(req, res, {"Error": "Project Database Response Error. No Projects Found."});
        console.log("Something went wrong when trying to access the Project Database. Error: +" + err);
        return;
      }
      _renderPortfolio(req, res, body);
      console.log("Portfolio Accessed and Rendered Succesfully!");
    }
  )
};

/* GET 'about' page */
const about = function(req, res) {
  res.render('about', {title:'About'});
};

/* GET 'contact' page */
const contact = function(req, res) {
  res.render('contact', {title:'Contact'});
}


module.exports = {
  welcome,
  portfolio,
  about,
  contact
};
