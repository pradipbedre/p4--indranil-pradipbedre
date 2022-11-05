const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
app.get("/forcast.html", (req, res) => {
  res.sendFile(__dirname + "/public/forcast.html");
});

app.post("/", (req, res) => {
  const inputCity = req.body.cityName;
  const apiKey = "6c26f8106b31701d8c1ba03c89cda5de";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=${apiKey}&units=metric`;
  https.get(url, (responce) => {
    // console.log(responce.statusCode);
    responce.on("data", (data) => {
      // console.log(data);
      const weatherData = JSON.parse(data);
      // kelvin to celsius conversion formula
      const temp = weatherData.main.temp;
      const weatherDescription = weatherData.weather[0].description;
      //console.log(temp);
      //console.log(weatherDescription);
      // console.log(weatherData);
      res.write(
        `<h1>The temperature in ${inputCity} is ${temp} degree celsius</h1>`
      );
      res.write(`<h1>The weather is currently ${weatherDescription}</h1>`);
    });
  });
});

app.post("/forcast.html", (req, response) => {
  const inputCity = req.body.cityName2;
  const apiKey = "6f31447dc63840228fb165002220311";
  const dayCount = req.body.dayCount;

  console.log({ inputCity, dayCount });
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputCity}&days=${dayCount}&aqi=no&alerts=no`;

  https.get(url, (res) => {
    var json = "";
    res.on("data", function (chunk) {
      json += chunk;
    });
    res.on("end", function () {
      if (res.statusCode === 200) {
        try {
          // data is here
          var data = JSON.parse(json);

          // storing the data in a variable
          const city = data.location.name;
          const curr_temp = data.current.temp_c;
          // printing current weather data
          response.write(
            `<div>
            <h1>This is the forcast of ${inputCity} For next ${dayCount} days</h1>
            <h2>Current Temperature is ${curr_temp} degree celsius</h2>
            <h1><----------Following Forcast for next ${dayCount} days--------></h1>
            </div>`
          );

          // printing forcast data for next x days (x = dayCount)

          for (let i = 0; i < dayCount; i++) {
            response.write(
              `<h3>
               Date ${data.forecast.forecastday[i].date} 
               Max temperature ${data.forecast.forecastday[i].day.maxtemp_c} degree celsius
               day condition ${data.forecast.forecastday[i].day.condition.text}
              </h3>`
            );
          }

          console.log(data.location.country);
        } catch (e) {
          console.log("Error parsing JSON!");
        }
      }
    });
  });
});

// server listening on port 3000 for local host
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("server is running on port 3000");
});
