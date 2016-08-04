angular.module('loc8rApp', []);

var locationListCtrl = function ($scope, loc8rData) {
  loc8rData
    .success(function(data) {
      $scope.data = { locations: data };
    })
    .error(function(e) {
      console.log(e);
    });
};

var loc8rData = function($http) {
  //-117.9143936,
  //33.812901
  return $http.get('/api/locations?lng=-117.9143936&lat=33.812901&maxDistance=2000');
};

var _isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};
var formatDistance = function() {
  return function(distance) {
    var numDistance, unit;
    if (distance && _isNumeric(distance)) {
      if (distance >= 1000) {
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

var ratingStars = function() {
  return {
    scope: {
      thisRating: '=rating'
    },
    templateUrl: '/angular/rating-stars.html'
  };
};

angular
  .module('loc8rApp')
  .controller('locationListCtrl', locationListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
  .service('loc8rData', loc8rData);
