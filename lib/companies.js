const path = require('path');
const Api  = require(path.join(__dirname, 'api'));

module.exports = Api.extend(function(options) {

}).methods({
  query: function(params, then) {
    this.get('companies', params, then);
  } 
})
