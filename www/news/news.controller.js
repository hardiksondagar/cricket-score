angular.module('app.news').controller('NewsController', NewsController);

NewsController.$inject = ['$rootScope','$scope', '$ionicHistory','newsService','$ionicLoading'];

function NewsController($rootScope, $scope,  $ionicHistory, newsService, $ionicLoading) {

  function loadingShow(options) {
    var default_options = {
      showBackdrop: true,
      maxWidth: 200,
      showDelay: 0
    }
    options = angular.extend(options, default_options);
    $ionicLoading.show(options);
  }

  function loadingHide() {
    $ionicLoading.hide();
  }


  $scope.newsPagiateRef = newsService.getPaginateRef();

  function init() {

    loadingShow({});

    $scope.newsPagiateRef  = newsService.getPaginateRef();
    // create a synchronized array on scope
    $scope.news = newsService.get($scope.newsPagiateRef);
    // load the first three contacts
    $scope.newsPagiateRef.scroll.next(6);

    $scope.news.$loaded().then(function(){
      loadingHide();

      console.log('here');
    }, function (error) {
      loadingHide();
    });
  }

  init();


  // This function is called whenever the user reaches the bottom
  $scope.loadMore = function() {
    // load the next contact
    $scope.newsPagiateRef.scroll.next(1);
    $scope.$broadcast('scroll.infiniteScrollComplete');

  };

  $scope.doRefresh = function() {
    init();
    $scope.$broadcast('scroll.refreshComplete');
  };




  $scope.openLink = function(link) {
    window.open(link, '_system','location=yes');
  }

}
