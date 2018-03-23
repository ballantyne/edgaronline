const klass       = require('klass');
const request     = require('request');
const _           = require('underscore');
const querystring = require('querystring');

module.exports = klass(function(options) {
  _.extend(this, options);

  if (this.protocol == undefined) {
    this.protocol = 'http';
  }
  
  if (this.host == undefined) {
    this.host     = 'edgaronline.api.mashery.com'
  }
    
  if (this.version == undefined) {
    this.version  = 'v2';
  }

  if (this.format == undefined) {
    this.format   = 'json'
  }

}).methods({

  get: function(endpoint, params, then) {
    params.appkey  = this.appkey;
    var options    = {};
    options.url    = [
      this.protocol, "://", this.host, '/', this.version, '/',
      endpoint, '.', this.format, '?', querystring.stringify(params)
    ].join('');
    options.method = 'GET';
    options.headers = {"Content-type": "application/json"};
    console.log(options);
    request(options, function(err, response, body) {
      if (typeof body == 'string') {
        body = JSON.parse(body);
      }
      then(err, body);
    });
  }

})
