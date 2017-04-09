var app = angular.module('shop',[]);

app.controller('ShopCtrl', ['$scope', function($scope) {
  $scope.numbers = [
    {
      "itemName": "banana",
      "imgSrc": "https://tinyurl.com/zcdrymz",
      "price": 1.25,
      "quantityRemaining": 10
    }
  ];
}]);
