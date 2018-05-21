process.env.NODE_ENV = 'test';

var mentor = require('../models/mentor.js');
var mysql2  = require('mysql2');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('Mentors', () => {
 // beforeEach((done) => {
    //    mentor.remove({}, (err) => {
      //      done();
      //  });
 //   });


describe('/GET mentor_routes', () => {
    it('it should get all mentors', (done) => {
        chai.request(server.js)
        .get('/mentor_routes')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();

        });
    });
});
});
describe('/POST Mentor', () => {
    it('it should not POST a mentor unavailable',  (done) => {
        let mentor = {
            name: "",
        }

            chai.request(server)
            .post('/mentor_routes')
            .send(mentor)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('available');
                res.body.errors.available.should.have.property('kind').eql('required');
            done();
            });
        });  

    it('it should POST available mentors', (done) => {
    let mentor = {
        name: "",
        available: true,
    }

    chai.request(server)
        .post('/mentor_routes')
        .send('mentor'
        .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('object');
             res.body.should.have.property('message').eql('Mentor successfully added!');
             res.body.mentor.should.have.property('name');
             res.body.mentor.should.have.property('available');
             done();
            })
        )}
    )}
)