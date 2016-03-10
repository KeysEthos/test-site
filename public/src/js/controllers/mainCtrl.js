 angular.module('mainCtrl', [])
      .controller('mainController', function($scope) {

	//Main script variables
	$scope.background= [
		{image: 'dist/img/buzz_background.png', description: 'main background'},
		{image: 'dist/img/buzz_logo/img_full.png', description: 'main logo'},
		{image: 'dist/img/buzz_logo/img_full_down.png', description: 'main down full'},
		{image: 'dist/img/buzz_logo/letters_only.png', description: 'letters'},
		{image: 'dist/img/buzz_logo/main.png', description: 'main bee only'},
		{image: 'dist/img/buzz_logo/spray_paint.png', description: 'bee spray paint'}
	];
});
