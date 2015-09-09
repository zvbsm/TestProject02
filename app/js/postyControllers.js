'use strict';

angular.module('postyApp',['angularModalService'])
.controller('postyMainController', function($scope, $timeout, ModalService, postsFactory) {
	$scope.footerText = "You're not signed in." //would be updated with "Signed in as (user name)"

	postsFactory.success(function(data) {
	  $scope.posts = data;
	  console.log('Factory returned: ' + $scope.posts);
	});

	$scope.createPost = function(newPost) {
		$scope.newPost.date = new Date().getTime();
		$scope.posts.push(newPost);
		$timeout(function() { //wait for modal animation to complete before clearing the form
			$scope.newPost = null;
		}, 500);
	};

	$scope.show = function(post) {
		console.log(post);
		ModalService.showModal({
			templateUrl: "partials/angularModal.html",
			controller: "angularModalController",
			inputs: {
				thisPost: post
			}
		}).then(function(modal) {
			modal.element.modal();
			modal.close.then(function(result) {
			});
		});
	};
})
.controller('angularModalController', function($scope, thisPost, close) {
	$scope.thisPost = thisPost;
	console.log('Post in modal: ' + thisPost);
	$scope.close = function(result) {
	  close(result, 500);
	};
})