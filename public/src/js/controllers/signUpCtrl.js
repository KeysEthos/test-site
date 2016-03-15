
angular.module('signUpCtrl', [])
	.controller('signUpController', ['$scope', function($scope) {

    //second page angular variables go here
	$scope.master = {};
      	$scope.update = function(user) {
        	$scope.master = angular.copy(user);
      };

    }]);
    
