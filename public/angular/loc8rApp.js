angular.module('loc8rApp', []);

var locationListCtrl = function ($scope) {
  $scope.data = {
    locations: [{
      name: 'Burger Queen',
      address: '5555 155th Pl, Tacoma, WA',
      rating: 2,
      facilities: ['Burgers', 'WiFi'],
      distance: '5000',
      _id: '57a0610c0bf8a6e189319x2g'
    },{
      name: 'The Spot',
      address: '5556 155th Pl, Tacoma, WA',
      rating: 2,
      facilities: ['Food', 'WiFi'],
      distance: '500',
      _id: '57a0610c0bf8a6e189319x2g'
    }]
  };
}

var _isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var formatDistance = function() {
  return function(distance) {
    var numDistance, unit;
    if (distance && _isNumeric(distance)) {
      if (distance >= 1000) {
        console.log(distance);
        numDistance = parseFloat((distance/1000).toFixed(1));
        unit = ' km';
      } else {
        numDistance = parseInt(distance, 10);
        unit = ' m';
      }
      return numDistance + unit;
    } else {
      return "?";
    }
  };
};

angular
  .module('loc8rApp')
  .controller('locationListCtrl', locationListCtrl)
  .filter('formatDistance', formatDistance);
