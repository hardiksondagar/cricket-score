(function() {
  'use strict';

  angular
  .module('app.core')
  .factory('firebaseDataService', firebaseDataService);

  firebaseDataService.$inject = ['FIREBASE_URL'];

  function firebaseDataService(FIREBASE_URL  ) {

    var root = new Firebase(FIREBASE_URL);

    var service = {
      root: root,
      score: root.child('score'),
      news:root.child('news'),
      settings:root.child('settings')
    };

    return service;
  }

})();
