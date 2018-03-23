edgaronline
------------

(I am not affiliated with the SEC or Donnelly Financial)

I thought that the SEC has made huge improvements to their data offerings, but they haven't!  A company called Donnelly Financial made a better api and have made it available to people on a test basis for two weeks and then you have to pay.  I tried to sign up to get a key and a lady gave me a bunch of obtuse answers and then never gave me a key.  If you sign up, you need to wait an hour for the key to be activated.  My key never got activated, not even the next day, I asked about it and the lady said, you need to wait an hour.  I explained again that I had waited an hour and then I also waited until the next morning and tried again and the key still wasn't working.  Then she asked me what I was trying to accomplish, was I going to make a product or a service and I told her that I was making an open source library of the api and then once I made the library I was going to see what I am able to make.  Then she asked me which api I wanted to test and I said that I needed to test all of the apis because I was making a library and that I had followed the spec very closely so that I thought that it would work then she never wrote back and the stock market dropped 724 points.  Probably just a coincidence right?  So I am not sure if this library works, but it is probably is pretty darn close.  Pull requests are welcome?  

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

There would be better examples and more thorough tests, but REDACTED employee of Donnelly Financial wasn't interested in helping me with the key issue.  


Donations
------------

Hot on the trail of scumbags insider traders that make a mockery of our currently accepted financial system?  Want to reward the person that made this kick-ass npm module?  That's right, you can make a difference in a solitary nerd's life.  Donate at the following cryptocurrency addresses, and thanks you for your support.  

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

