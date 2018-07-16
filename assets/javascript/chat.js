var config = {
    apiKey: "AIzaSyCBKYbtkbdNwANrUV07uvc4YAYZPtmq_cE",
    authDomain: "chat-6e8bf.firebaseapp.com",
    databaseURL: "https://chat-6e8bf.firebaseio.com",
    projectId: "chat-6e8bf",
    storageBucket: "chat-6e8bf.appspot.com",
    messagingSenderId: "431420291486"
  };
firebase.initializeApp(config);


$('#post').on("click", function(){
    var msgUser = $('#name-input').val();
    $('#name-input').attr("value", msgUser);
    var msgText = $('#message-input').val();
    firebase.database().ref().push({
        "user" : msgUser,
        "msg" : msgText
    });
    $('#message-input').val(" ");
});

firebase.database().ref().on("child_added", function(childSnapshot){
    var nametag = childSnapshot.val().user.charAt(0);
    var lileft = $('<li>').addClass("left clearfix");

    var spanimg = $('<span>').addClass("chat-img pull-left");
    var img = $('<img>').addClass("img-circle");
    img.attr("src", "http://placehold.it/50/55C1E7/fff&text=" + nametag);
    spanimg.append(img);

    var chatbody = $('<div>').addClass("chat-body clearfix");
    var divhead = $('<div>').addClass("header");
    var strong = $('<strong>').addClass("primary-font");
    strong.html(childSnapshot.val().user)
    divhead.append(strong);
    var p = $('<p>').html(childSnapshot.val().msg);
    chatbody.append(divhead, p);

    lileft.append(spanimg, chatbody);
    $('#chat-main').append(lileft);




});

//Project Console: https://console.firebase.google.com/project/chatapp-e99de/overview
//Hosting URL: https://chatapp-e99de.firebaseapp.com

