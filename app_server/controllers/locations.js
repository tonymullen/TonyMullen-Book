const request = require('request');
const apiOptions = {
  server : 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
  apiOptions.server = 'https://getting-mean2e.herokuapp.com'
}

/* GET 'home' page */
const homelist = function(req, res) {
  const path = '/api/locations';
  const requestOptions = {
    url : apiOptions.server + path,
    method : 'GET',
    json : {},
    qs : {
      lng : -122.500545,
      lat : 47.335534,
      maxDistance: 20000
    }
  };
  request(
    requestOptions,
    (err, response, body) => {
      let data = body
      if (response.statusCode === 200 & data.length) {
        for (let i = 0; i < data.length; i++) {
          data[i].distance = _formatDistance(data[i].distance);
        }
      }
      _renderHomepage(req, res, data);
    }
  )
};


const _renderHomepage = function(req, res, responseBody) {
  let message = null;
  if (!(responseBody instanceof Array)) {
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
    sidebar: 'Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake, or a pint? Let Loc8r help you find the place you\'re looking for.',
    locations: responseBody,
    message: message
  });
}

const _formatDistance = function (distance) {
  let thisDistance = 0;
  let unit = 'm';
  if (distance > 1000) {
    thisDistance = parseFloat(distance/1000).toFixed(1);
    unit = 'km';
  } else {
    thisDistance = Math.floor(distance);
  }
  return thisDistance + unit;
}

/* GET 'location info' page */
const locationInfo = function(req, res) {
  const path = `/api/locations/${req.params.locationid}`;
  requestOptions = {
    url : apiOptions.server + path,
    method : 'GET',
    json : {}
  };
  request(
    requestOptions,
    (err, response, body) => {
      let data = body;
      data.coords = {
        lng : body.coords[0],
        lat : body.coords[1]
      };
      console.log(data);
      _renderDetailPage(req, res, data);
    }
  )
}

const _renderDetailPage = function (req, res, locDetail) {
  res.render('location-info', {
    title: locDetail.name,
    pageHeader: {title: locDetail.name},
    sidebar: {
      context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get wome work done.',
      callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
    },
    location: locDetail
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
