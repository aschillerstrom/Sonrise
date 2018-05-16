
// Dependencies
// =============================================================
var path = require("path");


// Routes for HTMLs 
// =============================================================
module.exports = function(app) {


  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/view.html"));
  });

  // Mentor  route loads the mentor.html page,
  // where all the mentors are listed
  app.get("/mentor", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mentor.html"));
  });

  // Mentee route loads the mentee.html page,
  // mentee page
  app.get("/mentee", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/mentee.html"));
  });

};
