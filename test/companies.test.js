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
    describe('Companies', function() { 
      it('ciks', function(done) {
        var companies = new EdgarOnline.companies(key);
        companies.query({ciks: '0001090872'}, function(err, result) {
          assert.equal(result.method, 'GET');
          assert.equal(result.url, 'http://edgaronline.api.mashery.com/v2/companies.json?ciks=0001090872&appkey=APPKEY');
          done();
        });
      });
      it('filter=cik eq', function(done) {
        var companies = new EdgarOnline.companies(key);
        companies.query({filter: 'cik eq "0001090872"'}, function(err, result) {
          assert.equal(result.method, 'GET');
          assert.equal(result.url, 'http://edgaronline.api.mashery.com/v2/companies.json?filter=cik%20eq%20%220001090872%22&appkey=APPKEY');
          done();
        });
      });
    });
  });
});


