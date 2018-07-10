$(document).ready(function(){
    $.ajax({url: "https://api.ipgeolocation.io/ipgeo?apiKey=d4c26753ab984e72adb7aae4512288cb", success: function(result){
        $('#country').text(result.country_name);
        $('#state').text(result.state_prov);
        $('#city').text(result.city);
        $('#time').text(result.time_zone.current_time);
        $('#flag').attr("src", result.country_flag);
        console.log(result);
    }});
});


