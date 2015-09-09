'use strict';

angular.module('postyApp')
.factory('postsFactory', function($http) {
  return $http.get('json/posts.json');
});