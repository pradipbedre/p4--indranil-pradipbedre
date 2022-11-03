const express = require("express");
const https = require("https");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
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
      console.log(temp);
      console.log(weatherDescription);
      // console.log(weatherData);
      res.write(
        `<h1>The temperature in ${inputCity} is ${temp} degree celsius</h1>`
      );
      res.write(`<h1>The weather is currently ${weatherDescription}</h1>`);
    });
  });
});

/* app.post("/", (req, res) => {
  const inputCity = req.body.cityName2;
  const apiKey = "6f31447dc63840228fb165002220311";
  const dayCount = req.body.dayCount;
  //const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${inputCity}&days=${dayCount}&aqi=no&alerts=no`;
  const url = `https://api.weatherapi.com/v1/forecast.json?key=6f31447dc63840228fb165002220311&q=pune&days=3&aqi=no&alerts=no`;
  https.get(url, (responce) => {
    // console.log(responce);
    responce.on("data", (data) => {
      console.log(data); //
    });
  });
  res.send("We are live...");
}); */

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
