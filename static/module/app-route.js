angular.module('app-route',[]).config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl:'module/page1/page1.html',
			controller: 'page1Ctrl'
		})
		.when('/page2', {
			templateUrl: 'module/page2/page2.html',
			controller: 'page2Ctrl'
		});
})