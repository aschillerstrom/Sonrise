var db = require("../models");
var Mentor = db.Mentor;

module.exports = function(app) {
    app.get("api/mentors", function(req, res){
        Mentor.findAll({}).then(function(dbMentor){
            return res.json(dbMentor)
        })
    });

    app.get("api/mentors", function(req, res){
        Mentor.findAll({
            where: {
                first_name: req.params.first_name,
                last_name: req.params.last_name
            }
        }).then(function(dbMentor){
            return res.json(dbMentor)
        })
    });

    app.get("api/mentors", function(req, res){
        Mentor.findAll({
            where: {
                dOne: req.params.dOne
            }
        }).then(function(dbMentor){
            return res.json(dbMentor)
        })
    });

    app.post("api/mentors", function(req, res){
        Mentor.create({}).then(function(dbMentor){
            res.json(dbMentor);
        })
    });

}