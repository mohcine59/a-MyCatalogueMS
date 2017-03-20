angular.module('catalogueApp', ['ngRoute',
                                'produitService',
                                'mainCtrl','searchCtrl','addCtrl','updateCtrl','allCtrl'])
	.config(
		function($routeProvider){
			// On définit les différentes routes possibles 
		    $routeProvider
		      .when('/app/search',{
					templateUrl : '../search.html',
					controller : 'SearchCtrl',
				})
			  .when('/app/add',{
					templateUrl : '../add.html',
					controller : 'AddCtrl',
				})
				.when('/app/update/:ref?',{
					templateUrl : '../updateProduit.html',
					controller : 'UpdateCtrl',
					resolve:{
						//On le recupere dans le Ctrl en le definissant dans les attribut de function(..,idRef)
						idRef : function($route){
							console.log($route.current.params.ref);
							return $route.current.params.ref;
						}
					}
				})
				.when('/app/home',{
					templateUrl : '../home.html',
					controller : 'SearchCtrl',
				})
				.when('/app/all',{
					templateUrl : '../allProduits.html',
					controller : 'AllCtrl',
				});
		}	
	)