
angular.module('signUpCtrl', [])
	.controller('signUpController', ['$scope', function($scope) {

    //second page angular variables go here
	$scope.master = {};
      	$scope.update = function(signUp) {
       	   if(err)	
	     return console.log(err);
      };
        $http.post("/signUp").success(function(data) {
        // success
        console.log('Successful post');
        }).error(function(error) {
        // error
        console.log(JSON.stringify("Failed to get t&c: " + error));
        });
    }]);
    
