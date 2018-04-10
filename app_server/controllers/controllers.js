
/* GET 'welcome' page */
const welcome = function(req, res) {
  res.render('welcome', {title:'Welcome'})
};

/* GET 'portfolio' page */
const portfolio = function(req, res) {
  res.render('portfolio', {title:'Portfolio'});
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
