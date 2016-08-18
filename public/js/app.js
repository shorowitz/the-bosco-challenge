const app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {
  $http.get('/photos')
      .success(function(data) {
            $scope.images = data;
          })
      .error(function(data) {
          console.log('Error: ' + data);
      });
}]);

    //
