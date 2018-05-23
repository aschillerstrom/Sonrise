var db = require("../models");
var Mentee = db.Mentee;

// mentee routes

module.exports = function(app) {
    //find all mentees
    app.get("/mentees", function(req, res){
        Mentee.findAll({}).then(function(dbMentee){
            //console.log(dbMentee);
            return res.render('frame_mentees', {Mentee: dbMentee})
        })
    });

    //find a specific mentee
    app.get("/mentees/id/:id", function(req, res){
        Mentee.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentee){
            return res.render('frame_mentees', {Mentee: dbMentee})
        });
    });

    app.get("/mentees/online", function(req, res) {
        Mentee.findAll({
            where: {
                online: true
            }
        }).then(function(dbMentee) {
            return res.render('frame_mentees', {Mentee: dbMentee})
        });
    });

    //find all mentees of specific dimension
    app.get("/mentees/dimensions/:d_one", function(req, res){
        Mentee.findAll({
            where: {
                d_one: req.params.d_one
            }
        }).then(function(dbMentee){
            return res.render('frame_mentees', {Mentee: dbMentee})
        });
    });

    app.get("/mentees/profile/:id", function(req, res){
        Mentee.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentee){
            return res.render('profile', {Person: dbMentee, isMentor: false})
        });
    });

    //adding new mentee
    app.post("/api/mentees", function(req, res) {
        console.log("post mentee");
        var newMentee = req.body;
        Mentee.create({
            first_name: newMentee.first_name,
            last_name: newMentee.last_name,
            // birthday: newMentee.birthday,
            zip_code: newMentee.zip_code,
            online: true,
            bio: newMentee.bio,
            d_one: newMentee.d_one,
            // d_oneData: newMentee.d_oneData,
            d_two: newMentee.d_two,
            // d_twoData: newMentee.d_twoData,
            d_three: newMentee.d_three,
            // dT_threeData: newMentee.d_threeData,
            d_four: newMentee.d_four,
            // d_fourData: newMentee.df_fourData,
            d_five: newMentee.d_five,
            // d_fiveData: newMentee.d_fiveData,
        }).then(function(dbMentee){
            res.json(dbMentee);
        });
    });

    //updating mentees
    app.put("/api/mentees", function(req, res){
        var updateMentee = req.body;
        Mentee.update({
            first_name: updateMentee.first_name,
            last_name: updateMentee.last_name,
            bio: updateMentee.bio,
            // birthday: updateMentee.birthday,
            zip_code: updateMentee.zip_code,
            // online: updateMentee.online,
            d_one: updateMentee.d_one,
            // d_oneData: updateMentee.d_oneData,
            d_two: updateMentee.d_two,
            // d_twoData: updateMentee.d_twoData,
            d_three: updateMentee.d_three,
            // dT_threeData: updateMentee.d_threeData,
            d_four: updateMentee.d_four,
            // d_fourData: updateMentee.df_fourData,
            d_five: updateMentee.d_five,
            // d_fiveData: updateMentee.d_fiveData,
        },{
            where: {
                id: updateMentee.id
            }
        }).then(function(dbMentee){
            res.json(dbMentee);
        });
    });

    //deleting mentees
    app.delete("/api/mentees/:id", function(res, req) {
        Mentee.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentee) {
            res.json(dbMentee);
        });
    });

}