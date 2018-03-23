const path = require('path');
const Api  = require(path.join(__dirname, 'api'));

module.exports = Api.extend(function(options) {

}).methods({
  filers: function(params, then) {
    this.get('insiders/filers', params, then);
  },

  issues: function(params, then) {
    this.get('insiders/issues', params, then);
  },

  summary: function(params, then) {
    this.get('insiders/summarys', params, then);
  },

  transactions: function(params, then) {
    this.get('insiders/transactions', params, then);
  }


})
