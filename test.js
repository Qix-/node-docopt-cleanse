'use strict';
// jshint mocha:true

require('should');

var docoptCleanse = require('./');

it('should cleanse options', function() {
  var options = {
    '--some-option': 1234,
    'subcommand': true,
    'another': false,
    '<positional arg>': 'hello'
  };

  var clean = docoptCleanse(options);
  clean.someOption.should.equal(1234);
  clean.subcommand.should.equal(true);
  clean.another.should.equal(false);
  clean.positionalArg.should.equal('hello');
  clean.should.not.have.property('--some-option');
  clean.should.not.have.property('<positional arg>');
});
