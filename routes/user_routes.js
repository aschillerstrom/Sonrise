var db = require("../models");
var User = db.User;

module.exports = function(app) {
    app.get("api/users", function(req, res){
        User.findAll({}).then(function(dbUser){
            return res.json(dbUser)
        })
    });

    app.get("api/users", function(req, res) {
        User.findAllMentors({
            where: {
                mentor = true
            }
        }).then(function(dbUser){
            return res.json(dbUser);
        })
    });

    app.get("api/users", function(req, res) {
        User.findAllMentees({
            where: {
                mentor = false
            }
        }).then(function(dbUser){
            return res.json(dbUser);
        });
    });

    app.post("api/users", function(req, res) {
        var newUser = req.body;
        User.create({
            first_name = newUser.first_name,
            last_name = newUser.last_name,
            email: newUser.email,
            mentor: newUser.mentor,
            birthDay: newUser.birthDay,
            zip_ciode: newUser.zip_code
        }).then(function(dbUser){
            res.jsopn(dbUser);
        });
    });
}