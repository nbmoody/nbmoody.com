/* GET 'portfolio' page */
const portfolio = function(req, res) {
  res.render('portfolio', {title:'Portfolio'});
};

const about = function(req, res) {
  res.render('about', {title:'About'});
};

module.exports = {
  portfolio,
  about
};
