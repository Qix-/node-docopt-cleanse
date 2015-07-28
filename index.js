'use strict';
var camelcase = require('camelcase');

module.exports = function docoptCleanse(options) {
  var cleansed = {};
  for (var k in options) {
    if (!options.hasOwnProperty(k)) {
      continue;
    }

    var v = options[k];

    var matches = k.match(/^(?:<([^>]+)\>)|(?:\-\-(.+))|(.+)$/);
    if (!matches) {
      throw new Error('unknown key format: ' + k);
    }

    k = camelcase(matches[1] || matches[2] || matches[3]);
    cleansed[k] = v;
  }

  return cleansed;
};
