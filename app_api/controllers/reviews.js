const mongoose = require('mongoose');
const Loc = mongoose.model('Location');

const reviewsCreate = function(req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const reviewsReadOne = function(req, res) {
  if (req.params && req.params.locationid && req.params.reviewid) {
    Loc
      .findById(req.params.locationid)
      .select('name reviews')
      .exec((err, location) => {
        if (!location) {
          res
            .status(404)
            .json({
              "message": "locationid not found"
            });
            return;
        } else if (err) {
          res
            .status(404)
            .json(err);
          return;
        }
        if (location.reviews && location.reviews.length > 0) {
          const review = location.reviews.id(req.params.reviewid);
          if (!review) {
            res
              .status(404)
              .json({
                "message": "reviewid not found"
              });
          } else {
            response = {
              location : {
                name : location.name,
                id : req.params.locationid
              },
              review: review
            };
            res
              .status(200)
              .json(response);
          }
        } else {
          res
            .status(404)
            .json({
              "message": "no reviews faound"
            });
          }
        }
      );
  } else {
    res
      .status(404)
      .json({
        "message": "No locationid in request"
      });
  }
};

const reviewsUpdateOne = function(req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

const reviewsDeleteOne = function(req, res) {
  res
    .status(200)
    .json({"status" : "success"});
};

module.exports = {
  reviewsCreate,
  reviewsReadOne,
  reviewsUpdateOne,
  reviewsDeleteOne 
}