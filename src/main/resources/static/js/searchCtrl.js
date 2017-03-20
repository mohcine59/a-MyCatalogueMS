angular.module('searchCtrl', [])

.controller('SearchCtrl', function($scope, $http) {
console.log("CONTROLLER");
  $scope.produits = [];
  $scope.motCle = "";
  $scope.pageCourante = 0;
  $scope.resultSearch = false;
  
  $scope.exitMessage = function(){
	  $scope.resultSearch = false;
  }
  
  $scope.chercher = function(page){
	  $scope.pageCourante = page;
	  $http.get("/produitParMC?mc="+$scope.motCle+"&page="+page).then(
				function(res){
					console.log(res.data)
					if(res.data.numberOfElements == 0){
						$scope.resultSearch = true;
					}else{
						$scope.resultSearch = false;
					}
					$scope.produits = res.data;
					$scope.pages = new Array(res.data.totalPages);
					console.log($scope.pages);
				},
				function(error){
					console.log(error);
				}
			  );
  };
  
  
  
});