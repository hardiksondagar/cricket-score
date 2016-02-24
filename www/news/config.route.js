/*
* To change this license header, choose License Headers in Project Properties.
* To change this template file, choose Tools | Templates
* and open the template in the editor.
*/
(function () {
  'use strict';

  angular.module('app.news').config(configFunction);

  configFunction.$inject = ['$stateProvider'];

  function configFunction($stateProvider) {

    $stateProvider

    .state('app.news', {
      url: '/news',
      views: {
        'tab-news': {
          templateUrl: 'news/news.html',
          controller: 'NewsController'
        }
      }
    });
  }



})();
