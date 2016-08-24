var palabrassasApp = angular.module('palabrassas', ['firebase','ngRoute' , 'ngTouch']);

palabrassasApp.config (['$routeProvider', function($routeProvider){
	
	$routeProvider.when ('/' , {
		templateUrl : 'tmp/inicio.html',
		controller : 'splash'
	})
	.when ('/guia', {
		templateUrl : 'tmp/guia.html',
		controller : 'guia'
	})
	.when ('/lecciones', {
		templateUrl : 'tmp/lecciones.html',
		controller : 'lecciones'
	})
	.when ('/vocabulario', {
		templateUrl : 'tmp/vocabulario.html',
		controller : 'lecciones'
	})	
	.when ('/404' , {
		templateUrl : 'tmp/404.html',
	})
	.otherwise ({
		redirectTo : '/404'
	})
	
}]);