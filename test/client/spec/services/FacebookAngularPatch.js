'use strict';

describe('Service: Facebookangularpatch', function () {

  // load the service's module
  beforeEach(module('FacebookPatch'));

  // instantiate service
  var Facebookangularpatch;
  beforeEach(inject(function (_Facebookangularpatch_) {
    Facebookangularpatch = _Facebookangularpatch_;
  }));

  it('should do something', function () {
    expect(!!Facebookangularpatch).toBe(true);
  });

});
