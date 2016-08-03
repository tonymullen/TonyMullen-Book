var mongoose = require('mongoose');
var Loc = mongoose.model('Location');


module.exports.locationsListByDistance = function (req, res) {
  var lng = parseFloat(req.query.lng);
  var lat = parseFloat(req.query.lat);
  var point = {
    type: "Point",
    coordinates: [lng, lat]
  };
  var geoOptions = {
    spherical: true,
    maxDistance: 2000,
    num: 10
  };
  if (!lng || !lat) {
    sendJsonResponse(res, 404, {
      "message": "lng and lat query parameters are required"
    });
    return;
  }
  Loc.geoNear(point, geoOptions, function(err, results, stats) {
    var locations = [];
    results.forEach(function(doc) {
      locations.push({
          distance: doc.dis,
          name: doc.obj.name,
          address: doc.obj.address,
          rating: doc.obj.rating,
          facilities: doc.obj.facilities,
          _id: doc.obj._id
      });
    });
    sendJsonResponse(res, 200, locations);
  });
};

module.exports.locationsCreate = function (req, res) {
  Loc.create({
    name: req.body.name,
    address: req.body.address,
    facilities: req.body.facilities.split(","),
    coords: [parseFloat(req.body.lng), parseFloat(req.body.lat)],
    openingTimes: [{
      days: req.body.days1,
      opening: req.body.opening1,
      closing: req.body.closing1,
      closed:  req.body.closed1
    },{
      days: req.body.days2,
      opening: req.body.opening2,
      closing: req.body.closing2,
      closed:  req.body.closed2
    },{
      days: req.body.days3,
      opening: req.body.opening3,
      closing: req.body.closing3,
      closed:  req.body.closed3
    }]
  }, function(err, location) {
    if (err) {
      sendJsonResponse(res, 400, err);
    } else {
      sendJsonResponse(res, 201, location);
    }
  })
};

module.exports.locationsReadOne = function (req, res) {
  console.log("Reading one");
  if (req.params && req.params.locationid) {
    Loc
      .findById(req.params.locationid)
      .exec(function(err, location) {
        if(!location) {
          sendJsonResponse(res, 404, {
            "message": "locationid not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 404, err);
          return;
        }
        sendJsonResponse(res, 200, location);
      });
    } else {
      sendJsonResponse(res, 404, {
        "messsage": "No locationid in request"
      })
    }
};
module.exports.locationsUpdateOne = function (req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.locationsDeleteOne = function (req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};

var sendJsonResponse = function(res, status, content) {
  res.status(status);
  res.json(content);
}
