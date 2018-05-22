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
  
  describe('mentees', () => {
      it('should show available mentees', function() {
        assert.equal("online".status);
      });
    });