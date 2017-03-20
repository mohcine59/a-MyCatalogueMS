"use strict";

/**
 * Intercation avec les services REST
 */
var produitService = angular.module('produitService', [ 'ngResource' ]);

produitService.factory('ProduitService', [ '$resource','$http', function($resource,$http) {
    var service = {
	    getProduit = function(ref){
	    	$http.get("/produit?ref="+ref).then(
				function(res){
					console.log(res.data)
					return res.data;
				},
				function(error){
					console.log(error);
				}
			  );
	    }
    };
    return service;

} ]);
