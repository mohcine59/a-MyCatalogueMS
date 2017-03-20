angular.module('mainCtrl', [])

.controller('MainCtrl', function($scope, $http, $location) {
	console.log("MAIN CONTROLLER");
	
	$scope.goToSearch = function() {
		console.log("go to SEARCH");
		$location.path('/app/search');
	};

	$scope.goToAdd = function() {
		console.log("go to ADD");
		$location.path('/app/add');
	};

	$scope.goToUpdate = function() {
		console.log("go to UPDATE");
		$location.path('/app/update');
	};
	
	$scope.goToHome = function() {
		console.log("go to HOME");
		$location.path('/app/search');
	};
	
	$scope.goToAll = function() {
		console.log("go to ALL");
		$location.path('/app/all');
	};

});