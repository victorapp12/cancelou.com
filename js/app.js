var app = angular.module('cancelouApp', [
  'ui.router',
  'ngResource',
  'ngSanitize'
]);

app.run(function($rootScope) {

})

app.config(function($locationProvider) {

  // if(ENV_DEV != 'local'){
    $locationProvider.html5Mode(true);
  // }

});
