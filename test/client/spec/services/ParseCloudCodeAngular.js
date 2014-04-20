'use strict';

describe('Service: Parsecloudcodeangular', function () {

  // load the service's module
  beforeEach(module('ParseServices'));

  // instantiate service
  var Parsecloudcodeangular;
  beforeEach(inject(function (_Parsecloudcodeangular_) {
    Parsecloudcodeangular = _Parsecloudcodeangular_;
  }));

  it('should do something', function () {
    expect(!!Parsecloudcodeangular).toBe(true);
  });

});
