/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
(function () {
  'use strict';

  angular.module('app.layout').config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {

    $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'layout/layout.html',
      controller: 'LayoutController',
      controllerAs: 'vm'
    });

  }

})();
