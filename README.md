edgaronline
------------

(I am not affiliated with the SEC or Donnelly Financial) 

Not really sure if I want to publish it since I haven't really tested this module because I can't get a api key from the company that made this product.

[API Documentation](http://developer.edgar-online.com/docs)

## Installation
```bash
  npm install edgaronline --save
```

## Companies

[Companies Metadata Specification](http://developer.edgar-online.com/docs/companies)

```javascript
var EdgarOnline = require('edgaronline');
var companies = new EdgarOnline.companies(key);
companies.query({ciks: '0001090872'}, function(err, result) {
  console.log(result);
});
```

## Core Financials

[Core Financials Specification](http://developer.edgar-online.com/docs/core_financials)

```javascript
var EdgarOnline = require('edgaronline');
var coreFinancials = new EdgarOnline.coreFinancials(key);
coreFinancials.yearly({ciks: '0001090872'}, function(err, result) {
  console.log(result);
});

```

## Full Financials

[Full Financials Specification](http://developer.edgar-online.com/docs/full_financials)

```javascript
var EdgarOnline = require('edgaronline');
var fullFinancials = new EdgarOnline.coreFinancials(key);
fullFinancials.yearly({ciks: '0001090872'}, function(err, result) {
  console.log(result);
});
```

## Insider Trades

[Insider Trades Specification](http://developer.edgar-online.com/docs/insider_trades)

```javascript
var EdgarOnline = require('edgaronline');
var insiderTrades = new EdgarOnline.insiderTrades(key);
insiderTrades.filers({ciks: '0001090872'}, function(err, result) {
  console.log(result);
});
```

## Institutional Ownership

[Institutional Ownership Specification](http://developer.edgar-online.com/docs/institutional_ownership)

```javascript
var EdgarOnline = require('edgaronline');
var institutionalOwnership = new EdgarOnline.insiderTrades(key);
institutionalOwnership.issues({ciks: '0001090872'}, function(err, result) {
  console.log(result);
});
```

The examples above don't have the right parameters, if I can get access maybe I'll fix the readme and finish the tests.  Underwhelmed by Donnelly Financial.

Donations
------------

Hot on the trail of scumbag insider traders that make a mockery of our currently accepted financial system?  Want to reward the person that made this kick-ass npm module?  That's right, you can make a difference in a solitary nerd's life.  Donate at the following cryptocurrency addresses, and thanks you for your support.  

* BTC: 1A1BrPyWpdXLPsidjaMAmyNG71vFwmKPSR
* BCH: qqhk5ce25fs706sk9vlnhtezpk3ezp9euc82cyky8v
* ETH: 0xC33DBB4D997e6A3d9457F41ff07fb13f8DA7bF64
* LTC: LS2P54xNErZ36pXp95zqTyST7XTx5XHEZy

Contributing
------------

If you'd like to contribute a feature or bugfix: Thanks! To make sure your fix/feature has a high chance of being included, please read the following guidelines:

1. Post a [pull request](https://github.com/ballantyne/edgaronline/compare/).
2. Make sure there are tests! We will not accept any patch that is not tested.
   It's a rare time when explicit tests aren't needed. If you have questions
   about writing tests for paperclip, please open a
   [GitHub issue](https://github.com/ballantyne/edgaronline/issues/new).


And once there are some contributors, then I would like to thank all of [the contributors](https://github.com/ballantyne/edgaronline/graphs/contributors)!

License
-------

It is free software, and may be redistributed under the terms specified in the MIT-LICENSE file.

Copyright
-------
© 2018 Scott Ballantyne. See LICENSE for details.

