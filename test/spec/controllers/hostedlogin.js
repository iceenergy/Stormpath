'use strict';

describe('Controller: IdpAppCtrl', function () {

  // load the controller's module
  beforeEach(module('stormpathIdpApp'));

  var IdpAppCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    IdpAppCtrl = $controller('IdpAppCtrl', {
      $scope: scope
    });
  }));

  it('should do something', function () {
    expect(true).to.equal(true);
  });
});