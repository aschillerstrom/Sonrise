var db = require("../models");
var Mentee = db.Mentee;

module.exports = function(app) {
    app.get("api/mentees", function(req, res){
        Mentee.findAll({}).then(function(dbMentee){
            return res.json(dbMentee)
        })
    });

    app.get("api/mentees", function(req, res){
        Mentee.findAll({
            where: {
                first_name: req.params.first_name,
                last_name: req.params.last_name
            }
        }).then(function(dbMentee){
            return res.json(dbMenee)
        })
    });

    app.get("api/mentees", function(req, res){
        Mentee.findAll({
            where: {
                dOne: req.params.dOne
            }
        }).then(function(dbMentee){
            return res.json(dbMentee)
        })
    });

    app.post("api/mentees", function(req, res) {
        Mentee.create({}).then(function(dbMentee){
            res,json(dbMentee);
        });
    })

}