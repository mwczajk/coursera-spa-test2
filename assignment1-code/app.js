(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
  $scope.lunchMenu = "";
  $scope.fontColor="red";

  $scope.countDishes = function () {
    if ($scope.lunchMenu=="") {
      $scope.message = "Please enter data first";
      $scope.fontColor = "red";
      return;
    }
    $scope.fontColor = "green";
    var splittt = $scope.lunchMenu.split(',');
    var countItms=0;
    for (var i = 0; i < splittt.length; i++) {
      if (splittt[i].length > 0) { countItms = countItms+1;}
    //Do something
}
    if (countItms < 4) {
      $scope.message = "Enjoy!";
    } else {
      $scope.message = "Too much!";
    }
  };
}

})();
