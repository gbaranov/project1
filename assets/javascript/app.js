$(document).ready(function () {

    $(".ppProgress").hide();
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCABpnha764rP7TzASFn4eFclnq_KzIR2c",
        authDomain: "startpage-299f3.firebaseapp.com",
        databaseURL: "https://startpage-299f3.firebaseio.com",
        projectId: "startpage-299f3",
        storageBucket: "startpage-299f3.appspot.com",
        messagingSenderId: "358219302181"
    };
    firebase.initializeApp(config);

    var uploader = document.getElementById('uploader');
    var fileButton = document.getElementById('fileButton');

    fileButton.addEventListener('change', function (event) {
        //create a storage ref
        var file = event.target.files[0];

        var storageRef = firebase.storage().ref('placeholder/' + file.name);

        //upload file
        var task = storageRef.put(file);

        task.on('state_changed',

            //progress bar
            function progress(snapshot) {
                var percentage = (snapshot.bytesTransferred /
                    snapshot.totalBytes) * 100;
                uploader.value = percentage;
                console.log(percentage);
                $(".ppProgress").show();

            },

            function error(err) {

            },

            function complete() {
                alert("Your file has been uploaded!");

                $(".ppProgress").hide();

                var storageRef = firebase.storage().ref("placeholder/" + file.name);
                storageRef.getDownloadURL().then(function (url) {
                    console.log(url);
                    $("#container").css("background-image", `url(${url})`);
                    
                });
            }




        );


    });







    // DISPLAYING AND HIDING SETTINGS BAR
    $("#settings").on("click", function () {

        if ($('#snackbar').hasClass('hiding')) {
            $("#snackbar").addClass('showing');
            $("#snackbar").removeClass('hiding');

        } else if ($('#snackbar').hasClass('showing')) {
            $("#snackbar").addClass('hiding')
            $('#snackbar').removeClass('showing');
        }

    })

    $("#close").on("click", function () {
        if ($('#snackbar').hasClass('showing')) {
            $("#snackbar").addClass('hiding')
            $('#snackbar').removeClass('showing');
        }
    });



    //DARK/LIGHT THEME SETTINGS
    $("#darkTheme").on("click", function () {
        console.log("dark");
        if ($('#clockColor').hasClass('lightClock')){
            $("#clockColor").addClass('darkClock')
            $('#clockColor').removeClass('lightClock');
        }
        if ($('#weather-block').hasClass('lightClock')){
            $("#weather-block").addClass('darkClock')
            $('#weather-block').removeClass('lightClock');
        }
    })

    $("#lightTheme").on("click", function () {

        if ($('#clockColor').hasClass('darkClock')) {
            $("#clockColor").addClass('lightClock')
            $('#clockColor').removeClass('darkClock');
        }
        if ($('#weather-block').hasClass('darkClock')) {
            $("#weather-block").addClass('lightClock')
            $('#weather-block').removeClass('darkClock');
        }
    })

});














var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}