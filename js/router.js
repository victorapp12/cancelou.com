app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('app', {
      abstract: true,
      templateUrl: 'views/templates/template-default.html',
      controller: 'HomeCtrl'
    })

    .state('app.home', {
      url: "/",
      templateUrl: "views/home/home.html"
    })

  $urlRouterProvider.otherwise("/");

});
