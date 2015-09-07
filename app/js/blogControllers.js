'use strict';

angular.module('blogApp')
.controller('postsController', function($scope, postsFactory) {
	postsFactory.success(function(data) {
	  $scope.posts = data;
	  console.log($scope.posts);
	});

	$scope.highlightedPosts = [];
	$scope.highlightPost = function(post) {
		console.log(post);
		$scope.highlightedPosts.push(post);
	}
});