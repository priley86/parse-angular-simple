'use strict';

describe('Service: ParseObjects', function () {

  // load the service's module
  beforeEach(module('ExternalDataServices'));

  // instantiate service
  var ParseObjects;
  beforeEach(inject(function (_ParseObjects_) {
    ParseObjects = _ParseObjects_;
  }));

  it('should do something', function () {
    expect(!!ParseObjects).toBe(true);
  });

});
