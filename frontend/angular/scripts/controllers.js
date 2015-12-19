var simpleexpressControllers=angular.module('simpleexpressControllers', []);
simpleexpressControllers.controller("IndexController", ["$scope", "$http", "Articles", function($scope, $http, Articles){
	
	
		
		
		$scope.articles=Articles.query();
		
	
	$scope.clearArticle=function(){
		
		$scope.article={};
		
	};
	
	$scope.delete=function(id){
		
		if(id){
			
			Articles.delete({id : id}, function(){
				
				$scope.articles=Articles.query(function(){
					
					
					$('#deletePrompt').modal('hide');
					
					
				});
				
			});
			
		}
		
	}
	
	$scope.deletePrompt=function(articleToDelete){
		
		$scope.article=articleToDelete;
		$('#deletePrompt').modal('show');
		
	}
	
	$scope.add=function(){
		
		Articles.save($scope.article, function(){
			
			$scope.articles=Articles.query();
			$scope.article={};
			
		});
		
	}
	
	$scope.view=function(id){
		
		$scope.article=Articles.get({id : id}, function(){
			
			
			$('#viewArticle').modal('show');
			
		});
		
		
		
	}
	
	
	
	
	
}]);