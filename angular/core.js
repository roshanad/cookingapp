app.controller('cooking_data_control',function($scope, $http, $interval){
  load_pictures();
  $interval(function(){
    load_pictures();
  },300);
  function load_pictures(){
    $http.get('http://localhost:3000/load').success(function(data){
      $scope.profile_pictures = data;
      $scope.title = data;
      $scope.date_published = data;
      $scope.video_url = data;
      $scope.likes = data;
    });
  };
});
