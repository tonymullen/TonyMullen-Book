/* GET 'home' page */
const homelist = function(req, res) {
  res.render('index', { title: 'Home'});
}

/* GET 'location info' page */
const locationInfo = function(req, res) {
  res.render('index', { title: 'Location info'});
}

/* GET 'add review' page */
const addReview = function(req, res) {
  res.render('index', { title: 'Add review'});
}

module.exports = {
  homelist,
  locationInfo,
  addReview
}