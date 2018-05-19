var db = require("../models");
var Mentee = db.Mentee;

// mentee routes

module.exports = function(app) {
    //find all mentees
    app.get("/mentees", function(req, res){
        Mentee.findAll({}).then(function(dbMentee){
            console.log(dbMentee);
            return res.render('test', dbMentee)
        })
    });

    //find a specific mentee
    app.get("/mentees/:id", function(req, res){
        Mentee.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentee){
            return res.render('mentees', dbMentee)
        });
    });

    app.get("/mentees/online", function(req, res) {
        Mentee.findAll({
            where: {
                online: true
            }
        }).then(function(dbMentee) {
            return res.render('mentees', dbMentee)
        });
    });

    //find all mentees of specific dimension
    app.get("/mentees/dimensions/:d_one", function(req, res){
        Mentee.findAll({
            where: {
                d_one: req.params.d_one
            }
        }).then(function(dbMentee){
            return res.render('mentees_d_one', dbMentee)
        });
    });

    //adding new mentee
    app.post("api/mentees", function(req, res) {
        var newMentee = req.body;
        Mentee.create({
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
        }).then(function(dbMentee){
            res.json(dbMentee);
        });
    });

    //updating mentees
    app.put("api/mentees", function(req, res){
        var updateMentee = req.body;
        Mentee.update({
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
        },{
            where: {
                id: updateMentee.id
            }
        }).then(function(dbMentee){
            res.json(dbMentee);
        });
    });

    //deleting mentees
    app.delete("api/mentees/:id", function(res, req) {
        Mentee.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentee) {
            res.json(dbMentee);
        });
    })

}