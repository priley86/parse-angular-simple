'use strict';

angular.module('yoUrbanChampApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
