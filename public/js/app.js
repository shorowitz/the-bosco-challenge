const app = angular.module('myApp', []);

app.controller('mainController', ['$scope', '$http', function($scope, $http) {
  $http.get('/photos')
      .success(function(data) {
            $scope.images = data;
          })
      .error(function(data) {
          console.log('Error: ' + data);
      });
    }])

app.module('formExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.master = {};

      $scope.update = function(user) {
        $scope.master = angular.copy(user);
      };

      $scope.reset = function(form) {
        if (form) {
          form.$setPristine();
          form.$setUntouched();
        }
        $scope.user = angular.copy($scope.master);
      };

      $scope.reset();
    }]);
