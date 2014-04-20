'use strict';

describe('Service: Parsequeryangular', function () {

  // load the service's module
  beforeEach(module('ParseServices'));

  // instantiate service
  var Parsequeryangular;
  beforeEach(inject(function (_Parsequeryangular_) {
    Parsequeryangular = _Parsequeryangular_;
  }));

  it('should do something', function () {
    expect(!!Parsequeryangular).toBe(true);
  });

});
