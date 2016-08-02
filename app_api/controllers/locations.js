var mongoose = require('mongoose');
var Loc = mongoose.model('Location');

module.exports.locationsListByDistance = function (req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.locationsCreate = function (req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};
module.exports.locationsReadOne = function (req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
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
