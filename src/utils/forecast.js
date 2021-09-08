const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=0cf6bac3021525eefe8ad759e556a1cd&query=${latitude},${longitude}`;
  request({ url, json: true }, (error, response) => {
    const { error: responseError, current, location } = response.body;
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (responseError) {
      callback('Unable to find location', undefined);
    } else {
      const { weather_descriptions, feelslike, temperature, humidity } = current;
      callback(
        undefined,
        `The overall weather conditions are ${weather_descriptions}.<br/>
        The temperature is currently ${temperature} degrees, and with humidity levels at ${humidity}%,
        It actually feels more like ${feelslike} degrees.`
      );
    }
  });
};

module.exports = forecast;
