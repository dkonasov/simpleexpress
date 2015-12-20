var simpleexpress=angular.module('simpleexpress', [
'ngRoute',
'ngResource',
 'simpleexpressControllers'
 ]);
 simpleexpress.filter('paginator', function(){
    return function(n) {
      var res = [];
      for (var i = 1; i < n+1; i++) {
        res.push(i);
      }
      return res;
    };
  });
  simpleexpress.factory('Articles', ['$http', '$rootScope', '$resource', function($http, $rootScope, $resource){
	
	
	
	return $resource("/backend/articles/:id", {id: '@id'});
	
	
}]);
simpleexpress.config(['$resourceProvider', function($resourceProvider) {
  // Don't strip trailing slashes from calculated URLs
  $resourceProvider.defaults.stripTrailingSlashes = false;
}]);
simpleexpress.config([
'$routeProvider',
function($routeProvider){
	
	$routeProvider.when('/', {
		
		"templateUrl" : "/views/index.view.html",
		"controller" : "IndexController"
		
	});
	
}]);