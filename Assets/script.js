var searchBarEL = $('<li>').appendTo('#search');
var searchResult = document.querySelector('.search-result');
var campsite = document.querySelector('#campsite');
// var userState = $('#state-select').val();

function getApi(userState) {
    var requestUrl = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + userState + "&limit=10&api_key=kdwUFElfnyssbQAQVTTsu4o686nGIvszl3ymx0IW"
        console.log(userState);
    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (npsResponseArray) {
           renderResults(npsResponseArray);
        })
}

function renderResults(npsApiResponse) {
    console.log("npsApiResponse call here");
    console.log(npsApiResponse);
    var respData = npsApiResponse.data;
    for (let i = 0; i < respData.length; i++) {
        // ? a condition that checks if the property exists
        var resultEl = $('<li>').addClass('user-select').text(`${respData[i].addresses[0]?.city}, ${respData[i].addresses[0]?.line1}`)
        

        console.log(resultEl);
        $('.search-results').append(resultEl);
        
    }
}
//When user selects the campsite
    //Generate a route to the campsite
        //Pop-out? Second page?
    


//Campsites will be listed with distance from your location

 //When a user selects a State from the dropdown list
    //Dynamically generate a list of campsites in that state

$(document).on('click', '.list', function(event){
    var userState = $(event.target).text().trim();
    $('#state-select').val(userState);
    getApi(userState);
    
})

//This is jq for the dropdown menu
$( document ).ready(function() {
    $(".dropdown-trigger").dropdown();
});
//Storing search results to Local Storage
// localStorage.setItem("search")
// document.getElementById("search").innerHTML = localStorage.getItem("search-result");
