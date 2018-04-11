
/* GET 'welcome' page */
const welcome = function(req, res) {
  res.render('welcome', {title:'Welcome'})
};

/* GET 'portfolio' page */
const portfolio = function(req, res) {
  res.render('portfolio', {
    projects: [
      {
        imagePath: "/images/placeholder.png",
        title: "Project Title",
        linkURL: "#",
        tags: ["Plotly", "Github", "Data Science", "Shiny"],
        summary: "This is a really basic summary of this project. It is so fascinating. Brace yo-self..."
      },
      {
        imagePath: "/images/placeholder.png",
        title: "Project Title",
        linkURL: "#",
        tags: ["Plotly", "Github", "Data Science", "Shiny"],
        summary: "This is a really basic summary of this project. It is so fascinating. Brace yo-self..."
      },
      {
        imagePath: "/images/placeholder.png",
        title: "Project Title",
        linkURL: "#",
        tags: ["Plotly", "Github", "Data Science", "Shiny"],
        summary: "This is a really basic summary of this project. It is so fascinating. Brace yo-self..."
      },
      {
        imagePath: "/images/placeholder.png",
        title: "Project Title",
        linkURL: "#",
        tags: ["Plotly", "Github", "Data Science", "Shiny"],
        summary: "This is a really basic summary of this project. It is so fascinating. Brace yo-self..."
      },
      {
        imagePath: "/images/placeholder.png",
        title: "Project Title",
        linkURL: "#",
        tags: ["Plotly", "Github", "Data Science", "Shiny"],
        summary: "This is a really basic summary of this project. It is so fascinating. Brace yo-self..."
      }
    ]
  });
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
