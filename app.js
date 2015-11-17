var app = angular.module('maNews', []);

app.controller('MainCtrl', [
  '$scope',
  function($scope){
    $scope.test = 'Hello World';
    $scope.posts = [
      {title: 'post 1', upvotes: 23},
      {title: 'post 2', upvotes: 55},
      {title: 'post 3', upvotes: 11},
      {title: 'post 4', upvotes: 41},
      {title: 'post 5', upvotes: 36}
    ];
    $scope.addPost = function(){
      if(!scope.title || $scope.title === ''){
        return;
      }
      $scope.posts.push({title: $scope.title, upvotes: 0});
      $scope.title = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }]);
