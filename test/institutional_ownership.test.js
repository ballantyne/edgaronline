var path          = require('path');
var mockery       = require('mockery');
var should        = require('chai').should();
var request       = require('request-mockery');
var assert        = require('assert');
var _             = require('underscore');
const url         = require('url');
const querystring = require('querystring');

describe('SEC', function() {
    var EdgarOnline, key;
    before(function(){
      mockery.enable({
	warnOnReplace: false,
	warnOnUnregistered: false,
	useCleanCache: true
      });
      mockery.registerMock('request', request);
      key = {
        "key": "APPKEY"
      }
      EdgarOnline = require(path.join(__dirname, '..', 'index'));
    });

  after(function(){
    mockery.disable();
  }); 

  describe('EdgarOnline', function() {
    describe('Institutional Ownership', function() {
      it('Institutional Ownership', function(done) {
        var ownership = new EdgarOnline.ownership(key);
        ownership.currentissueholders({market: 'ETH-BTC'}, function(err, result) {
          assert.equal(result.method, 'GET');
          assert.equal(result.url, 'http://edgaronline.api.mashery.com/v2/ownership');
          done();
        });   
      });
    });
  });
});


