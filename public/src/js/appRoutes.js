
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
           templateUrl: 'views/home.html',
           controller: 'mainController'
        })
       
        .when('/signUp', {
           templateUrl: 'views/signUp.html',
           controller: 'signUpController'
	 });

    $locationProvider.html5Mode(true);

}]);
