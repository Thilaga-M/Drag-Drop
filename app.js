var App = angular.module('myApp', ['ngDragDrop']);

App.controller('myCtrl', function($scope, $timeout) {
  
  $scope.grids = [
      {name: 'grid1', list: []},
      {name: 'grid2', list: []},
      {name: 'grid3', list: []},
    ]

    $scope.addItem = function (addGrid) {
      debugger
      $scope.grids = [];
      for(var i = 1; i<= addGrid; i++ ){
          $scope.grids.push({name: 'grid'+i, list: []});
      }          
    }

  $scope.list1 = [
    { 'title': 'Temperature', 'drag': true },
    { 'title': 'Humidity', 'drag': true },
    { 'title': 'Current', 'drag': true },
    { 'title': 'Voltage', 'drag': true },
    { 'title': 'Power', 'drag': true },
  ];


});