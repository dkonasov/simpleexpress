var simpleexpressControllers=angular.module('simpleexpressControllers', []);
simpleexpressControllers.controller("IndexController", ["$scope", "$http", "Articles", function($scope, $http, Articles){
	
	
		
		$scope.sort={title : 1};
		$scope.sortingParams={field : "title", direction : 1};
		$scope.testDate="";
		$scope.pageSize=10;
		$scope.currentPage=1;
		$scope.paginator={skip : ($scope.currentPage-1)*$scope.pageSize, limit : $scope.pageSize};
		$scope.totalPages=1;
		
		
		$scope.articles=Articles.query({sort: $scope.sort, paginator: $scope.paginator}, function(data, headers){
			
			
			var totalElements=parseInt(headers('TotalElements'));
			$scope.totalPages=Math.ceil(totalElements/$scope.pageSize);
			
			
			
		});
		$scope.article={};
		$scope.$watch('sortingParams', function(newValue, oldValue){
			
			 if(newValue === oldValue){
				return;
			}
			$scope.sort={};
			$scope.sort[newValue.field]=newValue.direction;
			$scope.articles=Articles.query({sort: $scope.sort, paginator: $scope.paginator}, function(data, headers){
			
			
			var totalElements=parseInt(headers('TotalElements'));
			$scope.totalPages=Math.ceil(totalElements/$scope.pageSize);
			
			
			
		});
			
		}, true);
	$scope.changeSortDirection=function(){
		
		
		$scope.sortingParams.direction=0-$scope.sortingParams.direction;
		
	}
	$scope.goToPage=function(pageNum){
		
		$scope.currentPage=pageNum;
		$scope.paginator={skip : ($scope.currentPage-1)*$scope.pageSize, limit : $scope.pageSize};
		$scope.articles=Articles.query({sort: $scope.sort, paginator: $scope.paginator}, function(data, headers){
			
			var totalElements=parseInt(headers('TotalElements'));
			$scope.totalPages=Math.ceil(totalElements/$scope.pageSize);
			
			
			
		});
	}
	$scope.clearArticle=function(){
		
		$scope.article={};
		
	};
	
	$scope.delete=function(id){
		$scope.article={};
		if(id){
			
			Articles.delete({id : id}, function(){
				
				$scope.articles=Articles.query({sort: $scope.sort, paginator: $scope.paginator}, function(data, headers){
					
					var totalElements=parseInt(headers('TotalElements'));
					$scope.totalPages=Math.ceil(totalElements/$scope.pageSize);
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
			
			$scope.articles=Articles.query({sort: $scope.sort, paginator: $scope.paginator}, function(data, headers){
				
				
				var totalElements=parseInt(headers('TotalElements'));
				$scope.totalPages=Math.ceil(totalElements/$scope.pageSize);
				
				
			});
			$scope.article={};
			$('#addArticle').modal('hide');
		});
		} else {
			
			Articles.save({id : id, article : $scope.article}, function(){
				
				$scope.article={};
				$scope.articles=Articles.query({sort: $scope.sort, paginator: $scope.paginator}, function(data, headers){
					
					var totalElements=parseInt(headers('TotalElements'));
					$scope.totalPages=Math.ceil(totalElements/$scope.pageSize);
					
				});
				$('#addArticle').modal('hide');
				
			});
			
			
		}
	}
	
	$scope.modifyPrompt=function(modifyingArticle){
		
		for(var key in modifyingArticle){
			
			$scope.article[key]=modifyingArticle[key];
			
		}
		
		$('#addArticle').modal('show');
		
	};
	
	$scope.view=function(id){
		
		$scope.article=Articles.get({id : id}, function(){
			
			
			$('#viewArticle').modal('show');
			
		});
		
		
		
	}
	
	
	
	
	
}]);