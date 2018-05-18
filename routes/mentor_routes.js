var db = require("../models");
var Mentor = db.Mentor;

//mentor routes
module.exports = function(app) {
    //find all mentors
    app.get("/mentors", function(req, res){
        Mentor.findAll({}).then(function(dbMentor){
            return res.render('mentors', dbMentor)
        });
    });

    // app.get("api/mentors", function(req, res){
    //     Mentor.findAll({}).then(function(dbMentor){
    //         return res.json(dbMentor)
    //     })
    // });

    //find specific mentor
    app.get("/mentors/:id", function(req, res){
        Mentor.findAll({
            where: {
                id: req.params.id,
            }
        }).then(function(dbMentor){
            return res.render('mentor', dbMentor);
        })
    });

    //find mentor by dimension
    app.get("/mentors/:dOne", function(req, res){
        Mentor.findAll({
            where: {
                dOne: req.params.dOne
            }
        }).then(function(dbMentor){
            return res.render('mentor_dOne', dbMentor);
        })
    });

    //create new mentor
    app.post("api/mentors", function(req, res){
        var newMentor = req.body;
        Mentor.create({
            first_name: newMentor.first_name,
            last_name: newMentor.last_name,
            bio: newMentor.bio,
            available: newMentor.available,
            dOne: newMentor.dOne,
            dOneSpecific: newMentor.dOneSpecific,
            dTwo: newMentor.dTwo,
            dTwoSpecific: newMentor.dTwoSpecific,
            dThree: newMentor.dThree,
            dThreeSpecific: newMentor.dThreeSpecific,
            dFour: newMentor.dfour,
            dFourSpecific: newMentor.dfourSpecific,
            dFive: newMentor.dFive,
            dFiveSpecific: newMentor.dFiveSpecific,   
        }).then(function(dbMentor){
            res.json(dbMentor);
        });
    });

    //update mentor
    app.put("api/mentors/", function(req, res){
        var updateMentor = req.body;
        Mentor.update({
            first_name: updateMentor.first_name,
            last_name: updateMentor.last_name,
            bio: updateMentor.bio,
            available: updateMentor.available,
            dOne: updateMentor.dOne,
            dOneSpecific: updateMentor.dOneSpecific,
            dTwo: updateMentor.dTwo,
            dTwoSpecific: updateMentor.dTwoSpecific,
            dThree: updateMentor.dThree,
            dThreeSpecific: updateMentor.dThreeSpecific,
            dFour: updateMentor.dfour,
            dFourSpecific: updateMentor.dfourSpecific,
            dFive: updateMentor.dFive,
            dFiveSpecific: updateMentor.dFiveSpecific, 
        }, {
            where: {
                id: updateMentor.id 
            }
        }).then(function(dbMentor){
            res.json(dbMentor);
        });
    });

    //deleting mentors
    app.delete("api/mentors/:id", function(req, res){
        Mentor.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentor) {
            res.json(dbMentor);
        });
    });
}