var simpleexpress=angular.module("simpleexpress",["ngRoute","ngResource","simpleexpressControllers"]);simpleexpress.factory("Articles",["$http","$rootScope","$resource",function(e,r,s){return s("/backend/articles/:id",{id:"@id"})}]),simpleexpress.config(["$resourceProvider",function(e){e.defaults.stripTrailingSlashes=!1}]),simpleexpress.config(["$routeProvider",function(e){e.when("/",{templateUrl:"/views/index.view.html",controller:"IndexController"})}]);