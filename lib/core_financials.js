const path = require('path');
const Api  = require(path.join(__dirname, 'api'));

module.exports = Api.extend(function(options) {

}).methods({
  annual: function(params, then) {
    this.get('corefinancials/ann', params, then);
  },

  quarterly: function(params, then) {
    this.get('corefinancials/qtr', params, then);
  },

  trailingTwelveMonths: function(params, then) {
    this.get('corefinancials/ttm', params, then);
  },

  yearly: function(params, then) {
    this.get('corefinancials/ytd', params, then);
  }
})
