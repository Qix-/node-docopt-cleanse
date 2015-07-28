# node-docopt-cleanse [![Travis-CI.org Build Status](https://img.shields.io/travis/Qix-/node-docopt-cleanse.svg?style=flat-square)](https://travis-ci.org/Qix-/node-docopt-cleanse) [![Coveralls.io Coverage Rating](https://img.shields.io/coveralls/Qix-/node-docopt-cleanse.svg?style=flat-square)](https://coveralls.io/r/Qix-/node-docopt-cleanse)
Clean up your docopt options

## Example
```javascript
var docoptCleanse = require('docopt-cleanse');

var options = {
  '--some-option': '1234'          // returned by docopt()
};

var cleansed = docoptCleanse(options);

console.log(cleansed.someOptions); // 1234
```

## License
Licensed under the [MIT License](http://opensource.org/licenses/MIT).
You can find a copy of it in [LICENSE](LICENSE).
