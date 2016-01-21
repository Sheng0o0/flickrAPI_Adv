// YOUR CODE GOES HERE
function callback(p1){
    // console.log(p1)
    for (var i = 0; i < p1.length ; i++){
    $('#search-results').append("<img src=>");
    $('#search-results').append(p1[i].media.m);
    }
    // console.log(p1[0].media.m);
}


function flickrSearch(){
    var search = $('#search-query').val();
    searchFlickr(search,callback) ;
   
}
$(document).ready(function(){

  $('#search-btn').click(flickrSearch);
    
})