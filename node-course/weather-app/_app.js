const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=eddd10b05c1e2303e2a0723d44e888fd&query=New%20York&units=f";

request({ url: url, json: true }, (error, response) => {
  // const data = JSON.parse(response.body);
  // console.log(data.current);
  if (error) {
    console.log("Unable to connect to weather service!");
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log(
      "It is currently " +
        response.body.current.temperature +
        " degrees out. It is " +
        response.body.current.feelslike +
        " degrees out."
    );
  }
});

const geocodeURL =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiY2hpaGhvcmluIiwiYSI6ImNsMDA5cmFtbDBoenUzanBrMzU5cGF0bWcifQ.JWeF3_5vL5iVqZRhpb32CA";

request({ url: geocodeURL, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect to location service!");
  } else if (response.body.features.length === 0) {
    console.log("Unable to find location. Try another search");
  } else {
    const latitude = response.body.features[0].center[1];
    const longtitude = response.body.features[0].center[0];
    console.log(latitude, longtitude);
  }
});

// console.log("Startting");

// setTimeout(() => {
//   console.log("2 Second Timer");
// }, 2000);

// setTimeout(() => {
//   console.log("0 second Timer");
// }, 0);

// console.log("Stopping");
