/* GET 'home' page */
const homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake, or a pint? Let Loc8r help you find the place you\'re looking for.',
    locations: [{
      name: 'Oppenheimer Cafe',
      address: '555 Warner, Tacoma, WA',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      distance: '200m'
    },
    {
      name: 'Metronome Coffee',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 4,
      facilities: ['Hot drinks', 'Food'],
      distance: '250m'
    },
    {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 2,
      facilities: ['Donuts', 'Hot dogs', 'Premium wifi'],
      distance: '250m'
    }]
  });
}

/* GET 'location info' page */
const locationInfo = function(req, res) {
  res.render('location-info', {
    title: 'Oppenheimer Cafe',
    pageHeader: {title: 'Oppenheimer Cafe'},
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get wome work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: {
      name: 'Oppenheimer Cafe',
      address: '1500 N Warner St',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: {lat: 47.263659, lng: -122.479300},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am', 
        closing: '7:00pm',
        closed: false
      },{
        days: 'Saturday',
        opening: '8:00am', 
        closing: '5:00pm',
        closed: false
      },{
        days: 'Sunday',
        closed: true
      }],
      reviews: [
        {
          author: 'Simon Holmes',
          rating: 5, 
          timestamp: '16 July 2017',
          reviewTest: 'What a wild scene. Love this place.'
        },{
          author: 'Kylo Ren',
          rating: 2, 
          timestamp: '22 Dec 2017',
          reviewTest: 'This place just makes me mad.'
        }
      ]
    }
  });
}

/* GET 'add review' page */
const addReview = function(req, res) {
  res.render('location-review-form', { 
    title: 'Review Oppenheimer on Loc8r',
    pageHeader: { title: 'Review Oppenheimer'}
  });
}

module.exports = {
  homelist,
  locationInfo,
  addReview
}
