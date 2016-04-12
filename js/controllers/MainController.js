app.controller('MainController', ['$scope', function($scope) {
  $scope.exercises = [{
    icon: 'img/pushup.jpg',
    name: 'Pushups',
    count: 0,
    burn: 5
  }, {
    icon: 'img/squat.jpg',
    name: 'Squats',
    count: 0,
    burn: 7
  }, {
    icon: 'img/pullup.jpg',
    name: 'Pullups',
    count: 0,
    burn: 6
  }, {
    icon: 'img/row.jpg',
    name: 'Rows',
    count: 0,
    burn: 5
  }, {
    icon: 'img/lunge.jpg',
    name: 'Lunges',
    count: 0,
    burn: 4
  }, {
    icon: 'img/stepup.jpg',
    name: 'Step Ups',
    count: 0,
    burn: 2
  }, {
    icon: 'img/situp.jpg',
    name: 'Sit Ups',
    count: 0,
    burn: 8
  }];

  $scope.calories = 0;

  $scope.increase = function(index) {
    $scope.exercises[index].count += 1;
    $scope.calories += (($scope.exercises[index].count * $scope.exercises[index].burn) - (($scope.exercises[index].count - 1) * $scope.exercises[index].burn))
  };


  $scope.decrease = function(index) {
    if ($scope.exercises[index].count == 0) {
      $scope.exercises[index].count = 0;

    } else {
      if ($scope.exercises[index].count == 1) {
        $scope.exercises[index].count -= 1;
        $scope.calories -= $scope.exercises[index].burn;
      } else {
        $scope.exercises[index].count -= 1;
        $scope.calories -= (($scope.exercises[index].count * $scope.exercises[index].burn) - (($scope.exercises[index].count - 1) * $scope.exercises[index].burn))

      }

    }
  };


}]);
