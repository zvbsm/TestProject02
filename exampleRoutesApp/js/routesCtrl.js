'use strict';

angular.module('routesApp')
  .controller('MainController', function($scope) {
    $scope.labelName = 'New Button';
    $scope.newElement = angular.element('<div class="btn btn-default">' +
    	$scope.labelName + '</div>'); 
  })
  .controller('MainPageCtrl', function($scope) {
  	$scope.mainPageMessage = '<h2>I am a new page sample</h2>';
  });