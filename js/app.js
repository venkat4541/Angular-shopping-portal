var app = angular.module('shop',['ngRoute']);

app.config(function($routeProvider) {
   $routeProvider
    .when("/", {
      templateUrl: "partials/main.html"
    })
    .when("/cart", {
      templateUrl: "partials/cart.html",
      controller: "CartCtrl"
    })
    .when("/login", {
      templateUrl: "partials/Login.html",
      controller: "LoginCtrl"
    })
    .otherwise({
      redirectTo: '/'
    });
});

app.controller('ShopCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.numbers = [
    {
      "itemName": "",
      "imgSrc": "",
      "price": 0,
      "quantityRemaining": 0
    }
  ];
  $http.get('store_items.json')
    .then(function(response) {
      $scope.shopData = response.data;
  });
}]);
