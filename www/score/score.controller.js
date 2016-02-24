angular.module('app.score').controller('ScoreController', ScoreController);

ScoreController.$inject = ['$scope', '$ionicHistory','scoreService','$ionicLoading'];

function ScoreController($scope, $ionicHistory,  scoreService, $ionicLoading) {

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


  var scorePagiateRef = scoreService.getPaginateRef();

  function init() {

    loadingShow({});

    scorePagiateRef = scoreService.getPaginateRef();
    // create a synchronized array on scope
    $scope.score = scoreService.get(scorePagiateRef);
    // load the first three contacts
    scorePagiateRef.scroll.next(6);

    $scope.score.$loaded().then(function(){
      loadingHide();
    }, function (error) {
      loadingHide();
    });
  }

  init();

  // This function is called whenever the user reaches the bottom
  $scope.loadMore = function() {
    // load the next contact
    scorePagiateRef.scroll.next(1);
    $scope.$broadcast('scroll.infiniteScrollComplete');
  };

  $scope.doRefresh = function() {
    $scope.$broadcast('scroll.refreshComplete');
    init();
  };








  $scope.openLink = function(link) {
    window.open(link, '_system','location=yes');
  }

}
