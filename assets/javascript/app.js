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
        if ($('#clockColor').hasClass('lightClock')) {
            $("#clockColor").addClass('darkClock')
            $('#clockColor').removeClass('lightClock');
        }
        if ($('#weather-block').hasClass('lightClock')) {
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


(function() {
    var linkOptions = {
        fetchLinks: function() {
            var links = new Array;
            var links_str = localStorage.getItem('link');
            if (links_str != null) {
                links = JSON.parse(links_str);
            }
            return links;
        },
        removeLink: function() {
            var id = this.getAttribute('id');
            var links = linkOptions.fetchLinks();
            links.splice(id, 1);
            localStorage.setItem('link', JSON.stringify(links));
            linkOptions.showLinks();
            return false;
        },
        showLinks: function() {
            var links = linkOptions.fetchLinks();
            var html = '<ul>';
            for (var i=0; i<links.length; i++) {
                html += '<li><span class="link"><a href="' + links[i].url + '">' + links[i].label + '</a><button title="Remove" class="remove" id="' + i + '">✖</button></span></li>';
            };
            html += '</ul>';
            document.getElementById('links').innerHTML = html;
            var buttons = document.getElementsByClassName('remove');
            for (var i=0; i<buttons.length; i++) {
                buttons[i].addEventListener('click', linkOptions.removeLink);
            };
        },
        addLink: function() {
            var linkNew = document.getElementById('urlInput').value;
            var labelNew = document.getElementById('urlLabel').value;
            var newLink = { "url": linkNew, "label": labelNew };
            var links = linkOptions.fetchLinks();
            if (linkNew == "" || labelNew == "") {
                return false;
            } else {
                links.push(newLink);
                localStorage.setItem('link', JSON.stringify(links));
                linkOptions.showLinks();
                document.getElementById('urlInput').value = ""
                document.getElementById('urlLabel').value = ""
            }
        }
    };
    document.getElementById('addUrl').addEventListener('click', linkOptions.addLink);
    linkOptions.showLinks();
    var toggleMenu = {
        btnToggle: document.getElementById('btnToggle'),
        menu: document.getElementById('panel'),
        btnIcon: document.getElementById('icon'),
        btnClose: document.getElementsByClassName('remove'),
        btnClick: function() {
            toggleMenu.btnToggle.addEventListener('click', function() {
                toggleMenu.menu.classList.toggle('hide');
                toggleMenu.btnToggle.classList.toggle('active');
                for (i=0; i<toggleMenu.btnClose.length; i++) {
                    if (toggleMenu.btnClose[i].style.display == "none") {
                        toggleMenu.btnClose[i].style.display = "block";
                        toggleMenu.btnIcon.style.opacity = "1";
                    } else {
                        toggleMenu.btnClose[i].style.display = "none";
                        toggleMenu.btnIcon.style.opacity = "0.7";
                    }
                };
            });
        },
        btnCloseVis: function() {
            for (i=0; i<toggleMenu.btnClose.length; i++) {
                if (toggleMenu.btnClose[i].style.display = "block") {
                    toggleMenu.btnClose[i].style.display = "none";
                } else {
                    toggleMenu.btnClose[i].style.display = "block";
                }
            };
        }
    };
    toggleMenu.btnClick();
    document.onload = toggleMenu.btnCloseVis();
})();