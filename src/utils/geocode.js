const request = require('request');

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiaWF4ZWxyYWQiLCJhIjoiY2t0NGNxcWxyMTJ5NjM2cGc0c2J4ZW9nNiJ9.BOdPSsNc-Mkr7MC1-mIGGw&limit=1`;

  request({ url, json: true }, (error, response) => {
    const { features } = response.body;
    if (error) {
      callback('Unable to connect to location services', undefined);
    } else if (features.length === 0) {
      callback('Unable to find location. Try another search', undefined);
    } else {
      const { center, place_name } = features[0];
      const longitude = center[0];
      const latitude = center[1];
      callback(undefined, { latitude, longitude, location: place_name });
    }
  });
};

module.exports = geocode;
