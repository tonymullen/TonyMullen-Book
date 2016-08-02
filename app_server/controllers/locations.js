/* GET 'home' page */
module.exports.homelist = function(req, res) {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    }, locations: [{
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
  res.render('location-info', { title: 'Location info'});
}

/* GET 'Acc review' page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add review'});
}
