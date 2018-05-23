// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var users= require('./routes/user_routes.js');
var mentor = require ('./routes/mentor_routes.js');
var mentee = require ('./routes/mentee_routes.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");


//db.on('error', console.error.bind(console, 'connection error:' ));
//dont how the log when it is test

//if(config.util.getEnv('NODE_ENV') !=="test")

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

// Sets up handlebars view engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));

app.set('view engine', 'handlebars');

// Static directory
app.use(express.static("public"));


// Routes
  var menteeRoutes = require('./routes/mentee_routes');
  var mentorRoutes = require('./routes/mentor_routes');
  var htmlRoutes = require('./routes/html_routes');

  menteeRoutes(app);
  mentorRoutes(app);
  htmlRoutes(app); 



// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


module.exports = app;