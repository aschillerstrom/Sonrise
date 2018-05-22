process.env.NODE_ENV = 'test';

var mentee = require('../models/mentee.js');
var mysql2  = require('mysql2');
var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');
var should = chai.should();
var assert = chai.assert;

chai.use(chaiHttp);


describe('mentees', (done) => {
    it('should start empty', function() {
      var mentee = [];
  
      assert.equal(mentee.length, 0);
    });
  });
  
  describe('GET /mentees', () => {
      it('should show available mentees', function() {
        assert.equal("online".status);
      });
    });
  
describe('API Routes', () => {
    beforeEach(function(done){
        models.sequelize.sync({force: true, match: /_test$/, logging: false})
        .then (() => {
            return seed(models)
        }).then(() => {
            done()
        })
    })

    describe('GET /mentee', (done) => {
        it('should get a list of users /mentee GET', function(done){
            chai.request(app)
        .get('./users_routes')
        .end(function(err, res){
            expect(res.status).to.equal(200)
            expect(res).to.be.json
            expect(res.body).to.be.a('array')
            done()
        })
})
})
})