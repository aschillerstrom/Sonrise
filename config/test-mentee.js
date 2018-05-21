process.env.NODE_ENV = 'test';

var mentee = require('./mentee.js');
var mysql2  = require('mysql2');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();

chai.use(chaiHttp);

describe('mentee', () => {
    beforeEach ((done) =>{
        mentee.remove({}, (err) => {
            done
        });
    });

describe('/GET mentee', () => {
    it('it should get all mentee', (done) => {
        chai.request(server)
        .get("/mentee");
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a("array");
            res.body.length.should.be.eql(0);
            done();

        });
    });
});
describe('/POST Mentee', () => {
    it('it should not POST a mentee unavailable'  (done) => {
        let mentee = {
            name: "",
        }

            chai.request(server)
            .post('/mentee')
            .send(mentee)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.shold.be.a('object');
                res.body.should.have.property('errors');
                res.body.errors.should.have.property('available');
                res.body.errors.available.should.have.property('kind').eql('required');
            done();
            });
        });  

    it('it should POST available mentors', (done) => {
    let mentee = {
        name: "",
        available: true,
    }

    chai.request(server)
        .post('/mentee')
        .send('mentee'
        .end((err, res) => {
             res.should.have.status(200);
             res.body.should.be.a('object');
             res.body.should.have.property('message').eql('Mentee successfully added!');
             res.body.mentee.should.have.property('name');
             res.body.mentee.should.have.property('available');
             done();
            });
        });
    )};
});


