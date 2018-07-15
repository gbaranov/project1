var restoredWebsites = JSON.parse(localStorage.getItem('websites'));
    var counter = 1;
    var websites =
{ 
  queue: 
  [
    {id: 0, name:"W3Schools", nameURL:"https://www.w3schools.com/"},
    {id: 1, name:"CodeAcademy", nameURL:"https://www.codecademy.com/"},
    {id: 2, name:"MDN", nameURL:"https://developer.mozilla.org/en-US/"},
    {id: 3, name:"Udemy",nameURL:"https://www.udemy.com/"}
  ]
};

outputIt();

function outputIt() {
  var restoredWebsites = JSON.parse(localStorage.getItem('websites'));
  var outputs = "";
  for(var i = 0; i < restoredWebsites.queue.length; i++)
  {
    counter++;
  	outputs += '<div id="'+restoredWebsites.queue[i].id + '">' + restoredWebsites.queue[i].id+':'+restoredWebsites.queue[i].name +'    url:'+ restoredWebsites.queue[i].nameURL +'</div>';
  }
  document.getElementById("demo").innerHTML= outputs;
}
function popIt() {
  var restoredWebsites  = JSON.parse(localStorage.getItem('websites'));  
  restoredWebsites.queue.shift();
  localStorage.setItem('websites', JSON.stringify(restoredWebsites));
  outputIt();
}
function pushIt() {
  event.preventDefault();
  localStorage.setItem('websites', JSON.stringify(restoredWebsites));
  restoredWebsites.queue.push({
    id:  counter,
    name: $('#websiteName').val(),
    nameURL: $('#websiteURL').val(),
  });
  localStorage.setItem('websites', JSON.stringify(restoredWebsites));
  outputIt();
}












/*
$('#bookmark-add').on("click", function(){
    var title = $('#bookmark-title').val();
    var url = $('#bookmark-url').val();
    if (title === '') {
        console.log('title cant be empty');
    }
    if (url === '') {
        console.log('url cant be empty');
    }
    else {
        localStorage.setItem(title, url);
    }
    
});
*/