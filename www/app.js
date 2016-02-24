
angular.module('app', [
  'ionic',
  'ionic.utils',
  'ngCordova',
  'firebase',
  'app.core',
  'app.score',
  'app.news',
  'app.layout',
])


.run(function ($rootScope, $state, $ionicPlatform, $ionicHistory) {

  // $rootScope.$state = $state;

  $rootScope.$on("$stateChangeError", function (event, toState, toParams, fromState, fromParams, error) {
    console.log(error);
  });

  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }

  });

})

.config(function ($urlRouterProvider,$ionicConfigProvider) {

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise(function ($injector, $location) {
    var $state = $injector.get("$state");
    $state.go("app.score");
  });

  $ionicConfigProvider.tabs.position('bottom'); // other values: top

});
