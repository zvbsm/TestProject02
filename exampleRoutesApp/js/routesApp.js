'use strict';

angular.module('routesApp',['ngRoute'])
.config(function($routeProvider){
  $routeProvider
    .when('/',{templateUrl:'partials/sample.html',controller:'MainPageCtrl'})
    .when('/pageTwo',{template: '<div>This is page <strong>two</strong></div>'})
    .otherwise({template: '<div><strong>Theres no page here</strong></div>'})
});