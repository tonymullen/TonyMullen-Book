/* GET 'home' page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Have coffee, a sandwich, or a slice of pie while writing code and pushing your commits! Let Lo8r help you find the place you're looking for.",
    locations: [{
      name: 'Oppenheimer Cafe',
      address: '1500 N Warner St, Tacoma, WA 98416',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    }, {
      name: 'Cafe Hero',
      address: '11223 High Street, Tacoma, WA, 98407',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    }, {
      name: 'Cafe de Couture',
      address: '11224 Lowe Street, Tacoma, WA, 98407',
      rating: 2,
      facilities: ['Hot drinks', 'Premium wifi'],
      distance: '240m'
    }
  ]
  });
};

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
