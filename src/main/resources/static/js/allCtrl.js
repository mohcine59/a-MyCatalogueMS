angular.module('allCtrl', [])

.controller('AllCtrl', function($scope, $http,$location,ProduitService) {
console.log("ALL CONTROLLER");
  $scope.produits = [];
  $scope.type = 'designation'; 
  $scope.sortReverse  = false;  
  $scope.searchFilter   = '';
  
  $scope.chargeAll = function(){
	  $http.get("/all").then(
		function(res){
			console.log(res.data)
			$scope.produits = res.data;
		},
		function(error){
			console.log(error);
		}
	  );
  };
  
  $scope.chargeAll();
  
  $scope.sortType = function(type){
	  $scope.type = type;
	  $scope.sortReverse = !$scope.sortReverse;
  }
  
  $scope.modify = function(ref){
	  $location.path('/app/update/'+ref);
  }
  
  $scope.deleteProduit = function(ref){
	  ProduitService.deleteProduit(ref).then(function(res){
		  console.log(res);
		  $scope.chargeAll();
	  });
  }
  
});