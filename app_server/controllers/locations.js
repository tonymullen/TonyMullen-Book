var request = require('request');
var apiOptions = {
  server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = "https://warm-plateau-96144.herokuapp.com/";
}

var renderHomepage = function(req, res, responseBody) {
  var message;
  if(!(responseBody instanceof Array)) {
    message = "API lookup error";
    responseBody = [];
  } else {
    if (!responseBody.length) {
      message = "No places found nearby";
    }
  }
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Have coffee, a sandwich, or a slice of pie while writing code and pushing your commits! Let Lo8r help you find the place you're looking for.",
    locations: responseBody,
    message: message
  });
};

/* GET 'home' page */
module.exports.homelist = function(req, res) {
  var requestOptions, path;
  path = '/api/locations';
  requestOptions = {
    url: apiOptions.server + path,
    method: "GET",
    json: {},
    qs: {
      lng : -117.9143936,
      lat : 33.812901,
      maxDistance : 20000
    }
  };
  request (
    requestOptions,
    function(err, response, body) {
      var i, data;
      data = body;
      if (response.statusCode === 200 && data.length){
        for (i = 0; i < data.length; i++) {
          data[i].distance = _formatDistance(data[i].distance);
        }
      }
      renderHomepage(req, res, data);
    }
  );
};

var _formatDistance = function(distance) {
  var numDistance, unit;
  if (distance => 1000) {
    numDistance = parseFloat((distance/1000).toFixed(1));
    unit = ' km';
  } else {
    numDistance = parseInt(distance, 10);
    unit = ' m';
  }
  return numDistance + unit;
}

/* GET 'Location info' page */
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Oppenheimer Cafe',
        pageHeader: {
            title: 'Oppenheimer Cafe'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Oppenheimer Cafe',
            address: '1500 N Warner St, Tacoma, WA 98416',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 33.8121,
                lng: -117.9190
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Bob Ross',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'Long lines for the rides, otherwise pretty happy place.'
            }]
        }
    });
};

/* GET 'Add review' page */
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'eview Openheimer Cafe on Loc8r',
        pageHeader: {
            title: 'Review Openheimer Cafe'
        }
    });
};
