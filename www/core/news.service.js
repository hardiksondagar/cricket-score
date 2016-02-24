(function () {
  'use strict';

  angular.module('app.core').factory('newsService', newsService);

  newsService.$inject = ['$firebaseArray', 'firebaseDataService'];

  function newsService($firebaseArray, firebaseDataService) {

    var service = {
      get: get,
      getAll:getAll,
      getPaginateRef:getPaginateRef
    };

    return service;

    function getAll(timestamp) {
      return $firebaseArray(firebaseDataService.news.orderByChild('modifiedAt').startAt(timestamp));
    }

    function get(ref) {
      return $firebaseArray(ref);
    }


    function getPaginateRef() {
      return new Firebase.util.Scroll(firebaseDataService.news, 'nmodifiedAt');
    }

  }

})();
