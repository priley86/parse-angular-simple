'use strict';

angular.module('yoUrbanChampApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ParseServices', /* this is the Parse SDK */, 
  'ExternalDataServices', /* this is where we define all our models and collections */,  
  'FacebookPatch' /* our facebook angular wrapper so we can use FB.apiAngular instead of FB.api */
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main',
        controller: 'MainCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      .when('/parse', {
        templateUrl: 'partials/parse',
        controller: 'ParseCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);

    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(['ParseSDK', 'ExtendParseSDK', '$rootScope', '$location', 'Auth', 
    function (ParseService, ExtendParseSDK, $rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  }]);