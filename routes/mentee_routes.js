var Mentee = db.Mentee;

// mentee routes

module.exports = function(app) {
    //find all mentees
    app.get("/mentees", function(req, res){
        Mentee.findAll({}).then(function(dbMentee){
            return res.render('mentees', dbMentee)
        })
    });

    //find a specific mentee
    app.get("/mentees/:id", function(req, res){
        Mentee.findAll({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentee){
            return res.render('mentee', dbMentee)
        })
    });

    //find all mentees of specific dimension
    app.get("/mentees/:dOne", function(req, res){
        Mentee.findAll({
            where: {
                dOne: req.params.dOne
            }
        }).then(function(dbMentee){
            return res.render('mentee_dOne', dbMentee)
        });
    });

    //adding new mentee
    app.post("api/mentees", function(req, res) {
        var newMentee = req.body;
        Mentee.create({
            first_name: newMentee.first_name,
            last_name: newMentee.last_name,
            bio: newMentee.bio,
            dOne: newMentee.dOne,
            dOneSpecific: newMentee.dOneSpecific,
            dTwo: newMentee.dTwo,
            dTwoSpecific: newMentee.dTwoSpecific,
            dThree: newMentee.dThree,
            dThreeSpecific: newMentee.dThreeSpecific,
            dFour: newMentee.dfour,
            dFourSpecific: newMentee.dfourSpecific,
            dFive: newMentee.dFive,
            dFiveSpecific: newMentee.dFiveSpecific,
        }).then(function(dbMentee){
            res.json(dbMentee);
        });
    });

    //updating mentees
    app.update("api/mentees", function(req, res){
        var updateMentee = req.body;
        Mentee.update({
            first_name: updateMentee.first_name,
            last_name: updateMentee.last_name,
            bio: updateMentee.bio,
            dOne: updateMentee.dOne,
            dOneSpecific: updateMentee.dOneSpecific,
            dTwo: updateMentee.dTwo,
            dTwoSpecific: updateMentee.dTwoSpecific,
            dThree: updateMentee.dThree,
            dThreeSpecific: updateMentee.dThreeSpecific,
            dFour: updateMentee.dfour,
            dFourSpecific: updateMentee.dfourSpecific,
            dFive: updateMentee.dFive,
            dFiveSpecific: updateMentee.dFiveSpecific,
        },{
            where: {
                id: updateMentee.id
            }
        }).then(function(deMentee){
            res.json(dbMentee);
        });
    });

    //deleting mentees
    app.delete("api/mentees/:id", function(res, req) {
        Mentee.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbMentor) {
            res.json(dbMentor);
        });
    })

}