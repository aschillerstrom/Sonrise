var db = require("../models");
var User = db.User;

module.exports = function(app) {
    app.get("api/users", function(req, res){
        User.findAll({}).then(function(dbUser){
            return res.json(dbUser)
        })
    });

    // app.get("api/users", function(req, res) {
    //     User.findAllMentors({
    //         where: {
    //             mentor = true
    //         }
    //     }).then(function(dbUser){
    //         return res.json(dbUser);
    //     })
    // });

    // app.get("api/users", function(req, res) {
    //     User.findAllMentees({
    //         where: {
    //             mentor = false
    //         }
    //     }).then(function(dbUser){
    //         return res.json(dbUser);
    //     });
    // });

    app.post("api/users", function(req, res) {
        var newUser = req.body;
        User.create({
            first_name : newUser.first_name,
            last_name : newUser.last_name,
            email: newUser.email,
            //mentor: newUser.mentor,
            birthDay: newUser.birthDay,
            zip_ciode: newUser.zip_code
        }).then(function(dbUser){
            res.json(dbUser);
        });
    });

    app.delete("api/users/:id", function(req, res){
        User.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            res.json(dbUser)
        });
    });

    app.put("api/users", function(req, res){
        updateUser = req.body;
        User.update({
            first_name: updateUser.first_name,
            last_name: updateUser.last_name,
            email: updateUser.email,
            //mentor: updateUser.mentor,
            birthDay: updateUser.birthDay,
            zip_code: updateUser.zip_code
        }, {
            where: {
                id: updateUser.id
            }
        }).then(function(dbUser) {
            res.json(dbUser);
        });
    });
    
};