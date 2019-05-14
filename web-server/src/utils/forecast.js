const request = require('request');

const forecast = (lat, long, callback) => {
  const url = 'https://api.darksky.net/forecast/722fdb171eb6eb68744081fb8095dc23/' + lat + ',' + long + '?units=si';

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather API.', undefined);
    } else if (body.error) {
      callback('Unable to get weather info.', undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out. There is a ${
          body.currently.precipProbability
        }% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
