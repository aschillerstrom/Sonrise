// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var users = require('./routes/user_routes.js'); // loads the user routes

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

// Static directory
app.use(express.static("public"));




// Routes
// =============================================================
//require("./routes/api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});