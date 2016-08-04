var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');

/* Locations pages*/
router.get('/', ctrlOthers.angularApp);

/*Express routes are no longer used. Routing will be handled by Angular on the client side now*/
//router.get('/location/:locationid', ctrlLocations.locationInfo);
//router.get('/location/:locationid/reviews/new', ctrlLocations.addReview);
//router.post('/location/:locationid/reviews/new', ctrlLocations.doAddReview);

/*Other pages*/
//router.get('/about', ctrlOthers.about);

module.exports = router;
