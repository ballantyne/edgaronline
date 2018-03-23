const path = require('path');
const Api  = require(path.join(__dirname, 'api'));

module.exports = Api.extend(function(options) {

}).methods({
  currentissueholders: function(params, then) {
    this.get('ownerships/currenctissueholders', params, then);
  },

  currentownerholders: function(params, then) {
    this.get('ownerships/currenctownerholders', params, then);
  },

  issues: function(params, then) {
    this.get('ownerships/issues', params, then);
  },

  owners: function(params, then) {
    this.get('ownerships/owners', params, then);
  }


})
