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
  
  describe('mentor', () => {
      it('should show available mentees', function() {
        assert.equal("Available".status);
      });
    });
  
  