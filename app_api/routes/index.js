const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
})
const ctrlLocations = require('../controllers/locations');
const ctrlReviews = require('../controllers/reviews');
const ctrlAuth = require('../controllers/authentication');

// locations
router
  .route('/locations')
  .get(ctrlLocations.locationsListByDistance)
  .post(ctrlLocations.locationsCreate);

router
  .route('/locations/:locationid')
  .get(ctrlLocations.locationsReadOne)
  .put(ctrlLocations.locationsUpdateOne)
  .delete(ctrlLocations.locationsDeleteOne);

// reviews
router.post('/locations/:locationid/reviews', auth, ctrlReviews.reviewsCreate);
router.put('/locations/:locationid/reviews', auth, ctrlReviews.reviewsUpdateOne);
router.delete('/locations/:locationid/reviews', auth, ctrlReviews.reviewsDeleteOne);
router.get('/locations/:locationid/reviews/:reviewid', ctrlReviews.reviewsReadOne);

router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
