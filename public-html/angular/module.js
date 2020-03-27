
var a = angular.module('1st',['ngRoute']);

a.config(['$routeProvider', function($routeProvider){

    $routeProvider.
    when('/about', {
        templateUrl: 'pages/about.html',
    }).
    when('/places', {
        templateUrl: 'pages/places.html',
    }).
     when('/blog', {
        templateUrl: 'pages/blog.html',
    }).
    when('/service', {
        templateUrl: 'pages/service.html',
    }).
     when('/contact', {
        templateUrl: 'pages/contact.html',
    }).
      when('/slider', {
        templateUrl: 'pages/slider.html',
    }).
    otherwise({
        redirectTo: 'index.html',
    });
}]
);

a.controller('b', function($scope){

	

});