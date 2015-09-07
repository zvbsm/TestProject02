'use strict';

angular.module('blogApp')
.factory('postsFactory', function($http) {
  return $http.get('json/posts.json');
});