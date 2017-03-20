angular.module('updateCtrl', [])

.controller('UpdateCtrl', function($scope, $http, $location, idRef, ProduitService) {
	console.log("UPDATE CONTROLLER");
	$scope.ref = idRef;
	console.log($scope.ref);
	
	ProduitService.getProduit($scope.ref).success(function(res){
		$scope.produit = res;
	});
	
	$scope.addProduit = function(){
		ProduitService.updateProduit($scope.produit);
	}

});