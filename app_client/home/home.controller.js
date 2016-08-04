angular
  .module('loc8rApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl ($scope) {
  $scope.pageHeader = {
    title: 'Loc8r',
    strapline: 'Find places to work with wifi near you!'
  };
  $scope.sidebar = {
    content: "Looking for wifi and a seat? Loc8r will help you out!"
  }
}
