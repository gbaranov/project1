$(document).ready(function() {
    // Create two variable with the names of the months and days in an array
    var monthNames = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]; 
    var dayNames= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]

    var newDate = new Date();
    newDate.setDate(newDate.getDate());
    $('#date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());
    setInterval( function() {
        var seconds = new Date().getSeconds();
        $("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
        },1000);
        
    setInterval( function() {
        var minutes = new Date().getMinutes();
        $("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
        },1000);
        
    setInterval( function() {
        var hours = new Date().getHours();
        var ampm;
        if (hours > 12) {
            hours -= 12;
            ampm = "PM";
        }
        else if (hours == 0) {
            hours = 12;
            ampm = "AM";
        }
        $("#ampm").html(ampm);
        $("#hours").html(( hours < 10 ? "0" : "" ) + hours);
        }, 1000);	
    });