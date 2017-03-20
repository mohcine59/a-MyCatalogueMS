"use strict";

/**
 * Intercation avec les services REST
 */
var produitService = angular.module('produitService', []);

produitService.factory('ProduitService', ['$http', function($http) {
	var service = {
			allProduits: function(){
				return $http.get('/produits');
			},
			getProduit: function(ref){
				console.log("SERVICE PROD");
				return $http.get('/produit?ref='+ref);
			},
			updateProduit: function(produit){
				return $http.put('/update', produit);
			},
			deleteProduit: function(ref){
				return $http.delete('/delete/'+ref);
			}
    };
    return service;

}]);
