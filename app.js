var app = angular.module('maNews', []);

app.controller('MainCtrl', [
  '$scope', 'posts',
  function($scope, posts){
    $scope.test = 'Hello World';
    $scope.posts = posts.posts;
    $scope.addPost = function(){
      if(!$scope.title || $scope.title === ''){ return; }
      $scope.posts.push({
        title: $scope.title,
        link: $scope.link,
        upvotes: 0
      });
      $scope.title = '';
      $scope.link = '';
    };
    $scope.incrementUpvotes = function(post) {
      post.upvotes += 1;
    }
  }]);
  app.factory('posts', [function(){
    var o = {
      posts: [
        {title: 'post 1', upvotes: 23},
        {title: 'post 2', upvotes: 55},
        {title: 'post 3', upvotes: 11},
        {title: 'post 4', upvotes: 41},
        {title: 'post 5', upvotes: 36}
      ]};
    return o;
  }])
