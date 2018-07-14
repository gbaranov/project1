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