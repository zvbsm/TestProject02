'use strict';

angular.module('blogApp')
.controller('postsController', function($scope, postsFactory) {
	$scope.footerText = "You're not signed in." //this value would be updated with "Signed in as (user name)"
	$scope.highlightedPosts = [];

	postsFactory.success(function(data) {
	  $scope.posts = data;
	  console.log($scope.posts);
	});

	$scope.highlightPost = function(post) {
		console.log(post);
		$scope.highlightedPosts.push(post);
	};

	$scope.createPost = function(newPost) {
		$scope.newPost.date = new Date().getTime();
		$scope.posts.push(newPost);
		$scope.newPost = null;
	}
});