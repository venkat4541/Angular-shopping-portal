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

  app.controller('MainCtrl', ['$scope', 'MainService', function($scope, MainService) {

    this.data = MainService.getData;

    console.log(this.data);

    $scope.addToCart = function(item) {
      console.log(MainService.shopData);
    };
  }]);

  app.controller('CartCtrl', [ '$scope', function($scope) {
    $scope.cartCount = 5;
  }]);

  app.controller('LoginCtrl', [ '$scope', function($scope) {
    $scope.msg = "You/'re not signed in!";
  }]);

  app.service('MainService', function($http) {
    function getData() {
      $http.get('store_items.json')
        .then(function(response) {
          return response.data;
      });
    }
  });
