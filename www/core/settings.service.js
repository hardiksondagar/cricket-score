(function () {
  'use strict';

  angular.module('app.core').factory('settingsService', settingsService);

  settingsService.$inject = ['$firebaseObject', 'firebaseDataService'];

  function settingsService($firebaseObject, firebaseDataService) {

    var service = {
      get: get
    };

    return service;

    function get() {
      return $firebaseObject(firebaseDataService.settings);
    }

  }

})();
