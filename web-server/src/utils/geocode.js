const request = require('request');

const geocode = (address, callback) => {
  const url =
    'https://api.mapbox.com/geocoding/v5/mapbox.places/' +
    encodeURIComponent(address) +
    '.json?access_token=pk.eyJ1IjoibWF0dDI0MTMiLCJhIjoiY2p0aHR0Z2p2MmkzODN5bzloYjJicGswbyJ9.xCYI5pxVJycZQoT5xr1IKA&limit=1';
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to geocode API.', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find a geocode for that address', undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longtitude: body.features[0].center[0],
        location: body.features[0].place_name
      });
    }
  });
};

module.exports = geocode;
