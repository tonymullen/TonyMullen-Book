angular.module('loc8rApp', []);

var locationListCtrl = function ($scope) {
  $scope.data = {
    locations: [{
      name: 'Burger Queen',
      address: '5555 155th Pl, Tacoma, WA',
      rating: 2,
      facilities: ['Burgers', 'WiFi'],
      distance: '50',
      _id: '57a0610c0bf8a6e189319x2g'
    },{
      name: 'The Spot',
      address: '5556 155th Pl, Tacoma, WA',
      rating: 2,
      facilities: ['Food', 'WiFi'],
      distance: '50',
      _id: '57a0610c0bf8a6e189319x2g'
    }]
  };
}


angular
  .module('loc8rApp')
  .controller('locationListCtrl', locationListCtrl);
