/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
(function () {
  'use strict';

  angular.module('app.score').config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {

    $stateProvider

    .state('app.score', {
      url: '/score',
      views: {
        'tab-score': {
          templateUrl: 'score/score.html',
          controller: 'ScoreController'
        }
      }
    });

  }


})();
