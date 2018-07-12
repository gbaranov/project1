 var config = {
        apiKey: "AIzaSyB7bLQ70ULaoWW7gYXNfAvJyophJpFQD2M",
        authDomain: "chatapp-e99de.firebaseapp.com",
        databaseURL: "https://chatapp-e99de.firebaseio.com",
        projectId: "chatapp-e99de",
        storageBucket: "chatapp-e99de.appspot.com",
        messagingSenderId: "517691891242"}
 
 firebase.initializeApp(config);

     
//var myFirebase = new firebase("https://chatapp-e99de.firebaseio.com/");
var database = firebase.database();
var usernameInput = document.querySelector ('#username');
var textInput = document.querySelector ('#text');
var postButton = document.querySelector ('#post');
console.log(database);

postButton.addEventListener("click", function(){
    var msgUser = usernameInput.value;
	var msgText = textInput.value;
	database.ref().push({
        msgUser : msgText
        
    });
	textInput.value = "";
    
});

database.ref().on("child_added", function(childSnapshot){
    console.log(childSnapshot.val().msgUser);
    console.log(childSnapshot.val().msgText);
});

//Project Console: https://console.firebase.google.com/project/chatapp-e99de/overview
//Hosting URL: https://chatapp-e99de.firebaseapp.com