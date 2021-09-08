const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=0cf6bac3021525eefe8ad759e556a1cd&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, response) => {
    const { error: responseError, current } = response.body;
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (responseError) {
      callback('Unable to find location', undefined);
    } else {
      const { weather_descriptions, feelslike, temperature } = current;
      callback(
        undefined,
        weather_descriptions +
          '. It is currently ' +
          temperature +
          ' degrees out. It actually feels like ' +
          feelslike +
          ' degrees'
      );
    }
  });
};

module.exports = forecast;
