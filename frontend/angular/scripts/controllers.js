var simpleexpressControllers=angular.module('simpleexpressControllers', []);
simpleexpressControllers.controller("IndexController", ["$scope", "$http", "Articles", function($scope, $http, Articles){
	
	
		
		
		
		$scope.$on('articlesLoaded', function(){
			
			$scope.articles=Articles.getAll();
			
		});
	
	
	$scope.add=function(){
		
		console.log($scope.article);
		$http.post("/backend/articles/", $scope.article).success(function(data){
			
			console.log(data);
			$scope.articles=Articles.getAll();
			
			
		});
	}
	
	
	
	
	
}]);