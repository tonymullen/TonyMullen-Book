angular.module('loc8rApp', []);

var locationListCtrl = function ($scope, loc8rData, geolocation) {
  $scope.message = "Checking your location";
  $scope.getData = function(position) {
    var lat = position.coords.latitude,
        lng = position.coords.longitude;
    console.log("lat: " + lat);
    console.log("lng: " + lng);
    $scope.message = "Searching for nearby places";
    loc8rData.locationByCoords(lat, lng)
      .success(function(data) {
        $scope.message = data.length > 0 ? "" : "No locations found";
        $scope.data = { locations: data };
      })
      .error(function(e) {
        $scope.message = "Sorry, something's gone wrong";
      });
  };
  $scope.showError = function(error) {
    $scope.$apply(function() {
      $scope.message = error.message;
    });
  };

  $scope.noGeo = function() {
    $scope.$apply(function() {
      $scope.message = "Geolocation not supported by this browser";
    })
  };
  geolocation.getPosition($scope.getData, $scope.showError, $scope.noGeo);
};

var loc8rData = function($http) {
  var locationByCoords = function(lat, lng){
    return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=20000');
  };
  return {
    locationByCoords: locationByCoords
  };
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

var geolocation = function() {
  var getPosition = function(cbSuccess, cbError, cbNoGeo) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(cbSuccess, cbError);
    }
    else {
      cbNoGeo();
    }
  };
  return {
    getPosition: getPosition
  };
};

angular
  .module('loc8rApp')
  .controller('locationListCtrl', locationListCtrl)
  .filter('formatDistance', formatDistance)
  .directive('ratingStars', ratingStars)
  .service('loc8rData', loc8rData)
  .service('geolocation', geolocation);
