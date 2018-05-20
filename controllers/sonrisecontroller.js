var express = require("express");

var router = express.Router();
var db = require("../models/");

// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/survey");
});

// get route, edited to match sequelize
router.get("/mentor", function(req, res) {
  // replace old function with sequelize function
  db.mentor.findAll()
    // use promise method to pass the mentors...
    .then(function(dbmentor) {
      console.log(dbmentor);
      // into the main index, updating the page
      var hbsObject = { mentor: dbmentor };
      return res.render("index", hbsObject);
    });
});

// post route to create mentor
router.post("/mentors/create", function(req, res) {
  // edited mentor create to add in a mentor_name
  db.mentor.create({
    mentor_name: req.body.mentor_name
  })
    // pass the result of our call
  .then(function(dbmentor) {
      // log the result to our terminal/bash window
    console.log(dbmentor);
      // redirect
    res.redirect("/");
  });
});

// put route to devour a mentor
router.put("/mentors/update/:id", function(req, res) {
  // update one of the mentors
  db.mentors.create({
    devoured: true
  },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(function(dbmentors) {
    res.json("/");
  });
});

module.exports = router;