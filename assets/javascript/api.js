$(document).ready(function () {
    $.ajax({
        url: "https://api.ipgeolocation.io/ipgeo?apiKey=d4c26753ab984e72adb7aae4512288cb",
        success: function (geoResult) {
            $('#country').text(geoResult.country_name);
            $('#state').text(geoResult.state_prov);
            $('#city').text(geoResult.city);
            $('#time').text(geoResult.time_zone.current_time);
            $('#zipcode').text(geoResult.zipcode);
            $('#flag').attr("src", geoResult.country_flag);


            $.ajax({
                url: "https://api.openweathermap.org/data/2.5/weather?zip=" + geoResult.zipcode + "&units=imperial&appid=2eaa69456d41409f465bced69131d4e4",
                success: function (weatherResult) {
                    var hr = (new Date()).getHours();
                    console.log(hr + "current hour");
                    $('#temp').text(Math.floor(weatherResult.main.temp) + "° F");
                    $('#wind-speed').text(weatherResult.wind.speed);
                    $('#weather-description').text(weatherResult.weather[0].description);
                    console.log("something is wrong" + weatherResult.weather[0].description);
                    //CLEAR SKIES

                    //night time clear skies
                    if (weatherResult.weather[0].description === "clear sky" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Clear Skies");
                        $("#weatherIcon").html('<img src="assets/images/animated/night.svg">');
                    }
                    //day time clear skies
                    if (weatherResult.weather[0].description === "clear sky" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Clear Skies");
                        $("#weatherIcon").html('<img src="assets/images/animated/day.svg">');
                    }

                    //I BLESS THE RAINS
                    //LIGHT RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "light rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Light Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-4.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "light rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Light Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-1.svg">');
                    }

                    //MODERATE RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "moderate rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Moderate Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-5.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "moderate rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Moderate Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-2.svg">');
                    }

                    //HEAVY INTENSITY RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "heavy intensity rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Heavy Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-5.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "heavy intensity rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Heavy Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-2.svg">');
                    }

                    //VERY HEAVY RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "very heavy rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Very Heavy Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "very heavy rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Very Heavy Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-3.svg">');
                    }

                    //EXTREME RAIN
                    if (weatherResult.weather[0].description === "extreme rain") {
                        $('#weather-description').text("Extreme Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }

                    //FREEZING RAIN
                    if (weatherResult.weather[0].description === "freezing rain") {
                        $('#weather-description').text("Freezing Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }

                    //LIGHT INTENSITY SHOWER RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "light intensity shower rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Light Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-4.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "light intensity shower rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Light Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-1.svg">');
                    }

                    //SHOWER RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "shower rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-5.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "shower rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-2.svg">');
                    }

                    //HEAVY INTENSITY SHOWER RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "heavy intensity shower rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Heavy Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "heavy intensity shower rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Heavy Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-3.svg">');
                    }
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "heavy shower rain and drizzle" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Heavy Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "heavy shower rain and drizle" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Heavy Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-3.svg">');
                    }
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "heavy intensity shower rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Heavy Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "heavy intensity shower rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Heavy Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-3.svg">');
                    }
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "shower drizzle" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Heavy Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "shower drizzle" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Heavy Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-3.svg">');
                    }

                    //RAGGED SHOWER RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "ragged shower rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Ragged Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "ragged shower rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Ragged Showers");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-3.svg">');
                    }

                    //BEGIN THE DRIZZLES

                    //LIGHT INTENSITY DRIZZLE

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "light intensity drizzle" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Light Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-4.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "light intensity drizzle" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Light Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-1.svg">');
                    }

                    //LIGHT INTENSITY DRIZZLE RAIN

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "light intensity drizzle rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Light Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-4.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "light intensity drizzle rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Light Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-1.svg">');
                    }

                    //DRIZZLE

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "drizzle" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-5.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "drizzle" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-2.svg">');
                    }
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "drizzle rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-5.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "drizzle rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-2.svg">');
                    }

                    //HEAVY DRIZZLE
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "heavy intensity drizzle rain" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Heavy Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "heavy intensity drizzle rain" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Heavy Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-3.svg">');
                    }
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "heavy intensity drizzle" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Heavy Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "heavy intensity drizzle" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Heavy Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-3.svg">');
                    }

                    //THUNDER

                    //Thunder w/t light rain
                    if (weatherResult.weather[0].description === "thunderstorm with light rain") {
                        $('#weather-description').text("Thunderstorm with Light Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //Thunder w/t rain
                    if (weatherResult.weather[0].description === "thunderstorm with rain") {
                        $('#weather-description').text("Thunderstorm with Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //Thunder w/t heavy rain
                    if (weatherResult.weather[0].description === "thunderstorm with heavy rain") {
                        $('#weather-description').text("Thunderstorm with Heavy Rain");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //Light thunderstorm
                    if (weatherResult.weather[0].description === "light thunderstorm") {
                        $('#weather-description').text("Light Thunderstorm");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //thunderstorm
                    if (weatherResult.weather[0].description === "thunderstorm") {
                        $('#weather-description').text("Thunderstorm");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //Heavy thunderstorm
                    if (weatherResult.weather[0].description === "heavy thunderstorm") {
                        $('#weather-description').text("Heavy Thunderstorm");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //Ragged thunderstorm
                    if (weatherResult.weather[0].description === "ragged thunderstorm") {
                        $('#weather-description').text("Ragged Thunderstorm");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //thunderstorm w//t light drizzle
                    if (weatherResult.weather[0].description === "thunderstorm with light drizzle") {
                        $('#weather-description').text("Thunderstorm with Light Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //thunderstorm with drizzle
                    if (weatherResult.weather[0].description === "thunderstorm with drizzle") {
                        $('#weather-description').text("Thunderstorm with Some Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }
                    //thunderstorm with heavy drizzle
                    if (weatherResult.weather[0].description === "thunderstorm with heavy drizzle") {
                        $('#weather-description').text("Thunderstorm with Heavy Drizzle");
                        $("#weatherIcon").html('<img src="assets/images/animated/thunder.svg">');
                    }

                    console.log(weatherResult);

                    //CLOUDS

                    //few clouds

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "few clouds" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Few Clouds");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy-night-1.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "few clouds" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Few Clouds");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy-day-1.svg">');
                    }

                    //scattered clouds
            
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "scattered clouds" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Scattered Clouds");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy-night-2.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "scattered clouds" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Scattered Clouds");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy-day-2.svg">');
                    }

                    //broken clouds

                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "broken clouds" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Broken Clouds");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy-night-3.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "broken clouds" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Broken Clouds");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy-day-3.svg">');
                    }

                    //OVERCAST
                    if (weatherResult.weather[0].description === "overcast clouds") {
                        $('#weather-description').text("Overcast");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }

                    //MISC.
                    //mist
                    if (weatherResult.weather[0].description === "mist") {
                        $('#weather-description').text("Mist");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //smoke
                    if (weatherResult.weather[0].description === "smoke") {
                        $('#weather-description').text("smoke");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }
                    //haze
                    if (weatherResult.weather[0].description === "haze") {
                        $('#weather-description').text("Hazey");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }
                    //sand, dust whirls
                    if (weatherResult.weather[0].description === "sand, dust whirls") {
                        $('#weather-description').text("Sand, Dust Whirls");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }
                    //fog
                    if (weatherResult.weather[0].description === "fog") {
                        $('#weather-description').text("Foggy");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }
                    //sand
                    if (weatherResult.weather[0].description === "sand") {
                        $('#weather-description').text("Sand");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }
                    //dust
                    if (weatherResult.weather[0].description === "dust") {
                        $('#weather-description').text("Dust");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }
                    //volcanix ash
                    if (weatherResult.weather[0].description === "volcanic ash") {
                        $('#weather-description').text("Volcanic Ash");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }
                    //squalls
                    if (weatherResult.weather[0].description === "squalls") {
                        $('#weather-description').text("Squalls");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }
                    //tornado
                    if (weatherResult.weather[0].description === "tornado") {
                        $('#weather-description').text("Tornado");
                        $("#weatherIcon").html('<img src="assets/images/animated/cloudy.svg">');
                    }

                    //SNOWWWWWW

                    
                    //Light snow
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "light snow" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Light Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/snowy-4.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "light snow" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Light Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/snowy-1.svg">');
                    }
                    //snow
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "snow" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/snowy-5.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "snow" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/snowy-2.svg">');
                    }
                    //heavy snow
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "heavy snow" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/snowy-6.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "heavy snow" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/snowy-3.svg">');
                    }
                    //sleet
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "sleet" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Sleet");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "sleet" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Sleet");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //sleet
                    //NIGHT TIME
                    if (weatherResult.weather[0].description === "shower sleet" && hr > 19 || hr < 6) {
                        $('#weather-description').text("Shower Sleet");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //DAY TIME
                    if (weatherResult.weather[0].description === "sleet" && hr > 6 && hr < 19) {
                        $('#weather-description').text("Shower Sleet");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //ligth rain and snow
                    if (weatherResult.weather[0].description === "light rain and snow") {
                        $('#weather-description').text("Light Rain and Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //rain and snow
    
                    if (weatherResult.weather[0].description === "rain and snow") {
                        $('#weather-description').text("Rain and Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //light shower snow
    
                    if (weatherResult.weather[0].description === "light shower snow") {
                        $('#weather-description').text("Light Shower Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //shower snow
    
                    if (weatherResult.weather[0].description === "shower snow") {
                        $('#weather-description').text("Shower Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }
                    //heavy shower snow
    
                    if (weatherResult.weather[0].description === "heavy shower snow") {
                        $('#weather-description').text("Heavy Shower Snow");
                        $("#weatherIcon").html('<img src="assets/images/animated/rainy-7.svg">');
                    }

                }
            });
        }
    });
});