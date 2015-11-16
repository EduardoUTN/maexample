var app = angular.module('maNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello World';
    $scope.post = [
      'post 1',
      'post 2',
      'post 3',
      'post 4',
      'post 5',
    ];
  }]);
