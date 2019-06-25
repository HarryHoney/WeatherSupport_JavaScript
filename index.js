//heroku password is ********
//details are written in copy
//see your app here:-   https://dashboard.heroku.com/apps
const express=require('express');

var app = express();//this will return a object with few functions i can use
var port=process.env.PORT||5000;
var ansobj=null;
app.get('/data',(req,res) =>{                          
	var OAuth = require('oauth');
var header = {
    "X-Yahoo-App-Id": "*******"
};
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;
var request = new OAuth.OAuth(
    null,
    null,
    'dj0yJmk9TXZFYlNyNENGdURpJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTMx',
    'ebee2d3adc5c8f856eedfb5eefe0152d78bbdbb4',
    '1.0',
    null,
    'HMAC-SHA1',
    null,
    header
);
var lat=req.query.lat;//31.32
var lon=req.query.lon;//75.57
console.log(`lat=${lat} and lon=${lon}`);
request.get(
    `https://weather-ydn-yql.media.yahoo.com/forecastrss?lat=${lat}&lon=${lon}&format=json`,
    null,
    null,
    function (err, data, result) {
        if (err) {
            console.log(err);
        } else {
            var data1=JSON.parse(data);
             ansobj={
                city : data1.location.city,
                current_temp : data1.current_observation.condition.temperature,
                date : data1.current_observation.pubDate,
                wind : data1.current_observation.wind.speed,
                current_condition : data1.current_observation.condition.text,
                current_humidity : data1.current_observation.atmosphere.humidity,
                current_image : data1.current_observation.condition.code,
                one_day :data1.forecasts[0].day,
                one_temp_low : data1.forecasts[0].low,
                one_temp_high : data1.forecasts[0].high,
                one_text : data1.forecasts[0].text,
                one_code : data1.forecasts[0].code,
                                two_day :data1.forecasts[1].day,
                two_temp_low : data1.forecasts[1].low,
                two_temp_high : data1.forecasts[1].high,
                two_text : data1.forecasts[1].text,
                two_code : data1.forecasts[1].code,
                                three_day :data1.forecasts[2].day,
                three_temp_low : data1.forecasts[2].low,
                three_temp_high : data1.forecasts[2].high,
                three_text : data1.forecasts[2].text,
                three_code : data1.forecasts[2].code,
                                four_day :data1.forecasts[3].day,
                four_temp_low : data1.forecasts[3].low,
                four_temp_high : data1.forecasts[3].high,
                four_text : data1.forecasts[3].text,
                four_code : data1.forecasts[3].code,
                                five_day :data1.forecasts[4].day,
                five_temp_low : data1.forecasts[4].low,
                five_temp_high : data1.forecasts[4].high,
                five_text : data1.forecasts[4].text,
                five_code : data1.forecasts[4].code,
                                six_day :data1.forecasts[5].day,
                six_temp_low : data1.forecasts[5].low,
                six_temp_high : data1.forecasts[5].high,
                six_text : data1.forecasts[5].text,
                six_code : data1.forecasts[5].code
            };
            res.send(ansobj);
        }
    }
);
});

app.listen(port);
