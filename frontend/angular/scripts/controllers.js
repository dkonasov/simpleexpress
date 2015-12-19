var simpleexpressControllers=angular.module('simpleexpressControllers', []);
simpleexpressControllers.controller("IndexController", ["$scope", "$http", "Articles", function($scope, $http, Articles){
	
	
		
		
		$scope.articles=Articles.query();
		
	
	
	$scope.add=function(){
		
		Articles.save($scope.article, function(){
			
			$scope.articles=Articles.query();
			$scope.article={};
			
		});
		
	}
	
	$scope.view=function(id){
		
		$scope.article=Articles.get({id : id}, function(){
			
			console.log($scope.article);
			$('#viewArticle').modal('show')
			
		});
		
		
		
	}
	
	
	
	
	
}]);