const path = require('path');

module.exports.companies      = require(path.join(__dirname, 'lib', 'companies'));
module.exports.coreFinancials = require(path.join(__dirname, 'lib', 'core_financials'));
module.exports.financials     = require(path.join(__dirname, 'lib', 'full_financials'));
module.exports.insiderTrades  = require(path.join(__dirname, 'lib', 'insider_trades'));
module.exports.ownership      = require(path.join(__dirname, 'lib', 'institutional_ownership'));
