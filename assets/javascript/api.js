$(document).ready(function(){
    $.ajax({url: "https://api.ipgeolocation.io/ipgeo?apiKey=d4c26753ab984e72adb7aae4512288cb", success: function(geoResult){
        $('#country').text(geoResult.country_name);
        $('#state').text(geoResult.state_prov);
        $('#city').text(geoResult.city);
        $('#time').text(geoResult.time_zone.current_time);
        $('#zipcode').text(geoResult.zipcode);
        $('#flag').attr("src", geoResult.country_flag);
    

        $.ajax({url: "https://api.openweathermap.org/data/2.5/weather?q=" + geoResult.zipcode + "&appid=2eaa69456d41409f465bced69131d4e4", success: function(weatherResult){
            
            $('#temp').text(weatherResult.main.temp);
            $('#wind-speed').text(weatherResult.wind.speed);
            $('#weather-description').text(weatherResult.weather[0].description);

        }});
    }});
});







