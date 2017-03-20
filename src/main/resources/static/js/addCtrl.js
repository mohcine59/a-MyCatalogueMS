angular.module('addCtrl', [])

.controller('AddCtrl', function($scope, $http, $location) {
	console.log("ADD CONTROLLER");
	
$scope.produit = null;
$scope.isValidate = false;

$scope.exitMessage = function(){
	$scope.isValidate = false;
}

$scope.addProduit = function(){
	console.log($scope.produit);
	$http.post('/save', $scope.produit)
		.success(function(data){
			$scope.isValidate = true;
		})
		.error(function(e){
			console.log("ERROR ADD PRODUIT");
		})
	$scope.produit = null;
}

});