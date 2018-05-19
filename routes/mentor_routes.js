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
    app.get("/mentor/:id", function(req, res){
        Mentor.findAll({
            where: {
                id: req.params.id,
            }
        }).then(function(dbMentor){
            return res.render('mentor', dbMentor);
        })
    });

    app.get("/mentors/:online", function(req, res) {
        Mentor.findAll({
            where: {
                online :true
            }
        }).then(function(dbMentee) {
            return res.render('mentors_online', dbMentee)
        });
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
            first_name: newMentee.first_name,
            last_name: newMentee.last_name,
            bio: newMentee.bio,
            d_one: newMentee.d_one,
            d_oneData: newMentee.d_oneData,
            d_two: newMentee.d_two,
            d_twoData: newMentee.d_twoData,
            d_three: newMentee.d_three,
            dT_threeData: newMentee.d_threeData,
            d_four: newMentee.d_four,
            d_fourData: newMentee.df_fourData,
            d_five: newMentee.d_five,
            d_fiveData: newMentee.d_fiveData,  
        }).then(function(dbMentor){
            res.json(dbMentor);
        });
    });

    //update mentor
    app.put("api/mentors/", function(req, res){
        var updateMentor = req.body;
        Mentor.update({
            first_name: newMentee.first_name,
            last_name: newMentee.last_name,
            bio: newMentee.bio,
            d_one: newMentee.d_one,
            d_oneData: newMentee.d_oneData,
            d_two: newMentee.d_two,
            d_twoData: newMentee.d_twoData,
            d_three: newMentee.d_three,
            dT_threeData: newMentee.d_threeData,
            d_four: newMentee.d_four,
            d_fourData: newMentee.df_fourData,
            d_five: newMentee.d_five,
            d_fiveData: newMentee.d_fiveData, 
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