process.env.NODE_ENV = 'test';

var mentor = require('../models/mentor.js');
var mysql2  = require('mysql2');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();
var assert = chai.assert;

chai.use(chaiHttp);


describe('mentor', () => {
    it('should start empty', function() {
      var arr = [];
  
      assert.equal(arr.length, 0);
    });
  });
  
  describe('GET /mentor', () => {
      it('should show available mentees', function() {
        assert.equal("Available".status);
      });
    });
  
  

describe('GET /mentor', () => {
    it('it should get all mentors', (done) => {
        chai.request(server)
        .get('/mentor_routes')
        .end((err, res) => {
            expect(res.should.have.status(200));
            expect(res.body.should.be.a('array'));
            expect(res.body.length.should.be.eql(0));
            done();

        });
    });
});

describe('POST /Mentor', () => {
    it('it should not POST a mentor unavailable',  (done) => {
        let mentor = {
            name: "",
        }

            chai.request(server)
            .post('/mentor')
            .send(mentor)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('online');
                res.body.errors.available.should.have.property('kind').eql('required');
            done();
            });
        });  

    it('it should POST available mentors', (done) => {
    let mentor = {
        name: "",
        online: true,
    }

    chai.request(server)
        .post('/mentor')
        .send('mentor')
        .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('object');
             res.body.should.have.property('message').eql('Mentor successfully added!');
             res.body.mentor.should.have.property('name');
             res.body.mentor.should.have.property('online');
             done();
        })
    })
})