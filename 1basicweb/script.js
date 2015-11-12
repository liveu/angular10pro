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
    when('/services',{
        templateUrl : "services.html",
        controller : 'ServiceCtrl'
    }).
    when('/contact',{
         templateUrl : "contact.html",
         controller : 'ContactCtrl'
        }).
    otherwise({redirectTo:'/main'});
}])

.controller('MainCtrl', ['$scope','$http', function($scope,$http){
        $http.get('services.json').then(function(response){
            console.log(JSON.stringify(response.data));
            $scope.name = "Computer Science"
            $scope.services = response.data;
        });
}])

.controller('ContactCtrl', ['$scope','$http', function($scope,$http){
        $http.get('locations.json').then(function(response){
            console.log(JSON.stringify(response.data));
            $scope.locations = response.data;
        });
}])

.controller('ServiceCtrl', ['$scope','$http',function($scope, $http){
    $http.get('services.json').then(function(response){
        console.log(JSON.stringify(response.data));
        $scope.services = response.data;
    });
}]);

