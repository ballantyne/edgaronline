const path = require('path');
const Api  = require(path.join(__dirname, 'api'));

module.exports = Api.extend(function(options) {

}).methods({
  annual: function(params, then) {
    this.get('financials/ann', params, then);
  },

  quarterly: function(params, then) {
    this.get('financials/qtr', params, then);
  },

  trailingTwelveMonths: function(params, then) {
    this.get('financials/ttm', params, then);
  },

  yearly: function(params, then) {
    this.get('financials/ytd', params, then);
  }
})
