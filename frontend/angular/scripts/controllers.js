var simpleexpressControllers=angular.module('simpleexpressControllers', []);
simpleexpressControllers.controller("IndexController", ["$scope", "$http", "Articles", function($scope, $http, Articles){
	
	
		
		
		$scope.articles=Articles.query();
		$scope.article={};
	
	$scope.clearArticle=function(){
		
		$scope.article={};
		
	};
	
	$scope.delete=function(id){
		$scope.article={};
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
	
	$scope.save=function(id){
		
		if(!id){
		Articles.save($scope.article, function(){
			
			$scope.articles=Articles.query();
			$scope.article={};
			$('#addArticle').modal('hide');
		});
		} else {
			
			Articles.save({id : id, article : $scope.article}, function(){
				
				$scope.article={};
				$scope.articles=Articles.query();
				$('#addArticle').modal('hide');
				
			});
			console.log("Modify article. To be coded.");
			
		}
	}
	
	$scope.modifyPrompt=function(modifyingArticle){
		
		$scope.article=modifyingArticle;
		$('#addArticle').modal('show');
		
	};
	
	$scope.view=function(id){
		
		$scope.article=Articles.get({id : id}, function(){
			
			
			$('#viewArticle').modal('show');
			
		});
		
		
		
	}
	
	
	
	
	
}]);