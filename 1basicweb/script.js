/**
 * Created by shchoi on 2015-10-27.
 */
var app = angular.module("computer",['ngRoute'])//['injection Module']

.config(['$routeProvider', function($routeProvider){
    $routeProvider.
    when('/main',{
         templateUrl : "main.html",
         controller : 'MainCtrl'
        }).
    when('/about',{
         templateUrl : "about.html",
         controller : 'MainCtrl'
        }).
    when('/contact',{
         templateUrl : "contact.html",
         controller : 'ContactCtrl'
        }).
    when('/services',{
         templateUrl : "services.html",
         controller : 'ServiceCtrl'
        }).
    otherwise({redirectTo:'/main'});
}])

.controller('MainCtrl', ['$scope',function($scope){
    $scope.person = "Liveu";
   console.log($scope);
}])

.controller('ContactCtrl', ['$scope', function($scope){

}])

.controller('ServiceCtrl', ['$scope','$http',function($scope, $http){
    $http.get('services.json').then(function(response){
        console.log(response.data);
    });
}]);

