(function () {
  'use strict';

  angular.module('app.core').factory('scoreService', scoreService);

  scoreService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function scoreService($firebaseArray, firebaseDataService) {

    var service = {
      get: get,
      getAll:getAll,
      getPaginateRef:getPaginateRef
    };

    return service;

    function getAll(timestamp) {
      return $firebaseArray(firebaseDataService.score.orderByChild('modifiedAt').startAt(timestamp));
    }

    function get(ref) {
      return $firebaseArray(ref);
    }


    function getPaginateRef() {
      return new Firebase.util.Scroll(firebaseDataService.score, 'nmodifiedAt');
    }

  }

})();
