var db = require("../models");
var Mentor = db.Mentor;

//mentor routes
module.exports = function(app) {
    //find all mentors
    app.get("/mentors", function(req, res){
        Mentor.findAll({}).then(function(dbMentor){
            return res.render('frame_mentors', {Mentor: dbMentor})
        });
    });

    //find specific mentor
    app.get("/mentors/id/:id", function(req, res){
        Mentor.findAll({
            where: {
                id: req.params.id,
            }
        }).then(function(dbMentor){
            return res.render('frame_mentors', {Mentor: dbMentor});
        })
    });

    app.get("/mentors/online", function(req, res) {
        Mentor.findAll({
            where: {
                online :true
            }
        }).then(function(dbMentee) {
            return res.render('frame_mentors', {Mentor: dbMentee})
        });
    });

    //find mentor by dimension
    app.get("/mentors/dimensions/:param", function(req, res){
        Mentor.findAll({
            where: {
                d_one: req.params.param
            }
        }).then(function(dbMentor){
            return res.render('frame_mentors', {Mentor: dbMentor});
        })
    });

    app.get("/mentors/profile/:id", function(req, res){
        // console.log("hello? is it me you're looking for?");
        Mentor.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentor){
            return res.render('profile', {Person: dbMentor, isMentor: true})    
        });
    });

    //create new mentor
    app.post("/api/mentors", function(req, res){
        var newMentor = req.body;
        Mentor.create({
            first_name: newMentor.first_name,
            last_name: newMentor.last_name,
            birthday: newMentor.birthday,
            zip_code: newMentor.zip_code,
            online: newMentor.online,
            bio: newMentor.bio,
            d_one: newMentor.d_one,
            d_oneData: newMentor.d_oneData,
            d_two: newMentor.d_two,
            d_twoData: newMentor.d_twoData,
            d_three: newMentor.d_three,
            d_threeData: newMentor.d_threeData,
            d_four: newMentor.d_four,
            d_fourData: newMentor.df_fourData,
            d_five: newMentor.d_five,
            d_fiveData: newMentor.d_fiveData,  
        }).then(function(dbMentor){
            res.json(dbMentor);
        });
    });

    //update mentor
    app.put("/api/mentors", function(req, res){
        var updateMentor = req.body;
        Mentor.update({
            first_name: updateMentor.first_name,
            last_name: updateMentor.last_name,
            birthday: updateMentor.birthday,
            zip_code: updateMentor.zip_code,
            online: updateMentor.online,
            bio: updateMentor.bio,
            d_one: updateMentor.d_one,
            d_oneData: updateMentor.d_oneData,
            d_two: updateMentor.d_two,
            d_twoData: updateMentor.d_twoData,
            d_three: updateMentor.d_three,
            d_threeData: updateMentor.d_threeData,
            d_four: updateMentor.d_four,
            d_fourData: updateMentor.df_fourData,
            d_five: updateMentor.d_five,
            d_fiveData: updateMentor.d_fiveData, 
        }, {
            where: {
                id: updateMentor.id 
            }
        }).then(function(dbMentor){
            res.json(dbMentor);
        });
    });

    //deleting mentors
    app.delete("/api/mentors/:id", function(req, res){
        Mentor.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentor) {
            res.json(dbMentor);
        });
    });
}