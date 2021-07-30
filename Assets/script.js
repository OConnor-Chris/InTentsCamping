var searchBarEL = $('<li>').appendTo('#search')
var searchResult = document.querySelector('.search-result')
var campsite = document.querySelector('#campsite')
var requestUrl = 'https://developer.nps.gov/api/v1/campgrounds/?&api_key=xSn7ChieXuRmYI13uvMt5MVAakcIvQOihc2TvJMf'

function getApi(stateValue) {
    var requestUrl = 'https://developer.nps.gov/api/v1/campgrounds/?q=${stateValue}&api_key=xSn7ChieXuRmYI13uvMt5MVAakcIvQOihc2TvJMf'
    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (data) {
            var stateName = $('<li>').text(`${data.addresses[1].statecode}`)
                console.log(data);
            $('.search-list').append(stateName);
        })
}
//When user selects the campsite
    //Generate a route to the campsite
        //Pop-out? Second page?
    
//They are presented with a list of campsites
    //LI
        //Dynamically create

//Campsites will be listed with distance from your location

 //When a user selects a State from the dropdown list
    //Dynamically generate a list of campsites in that state

$(document).on('click', '.list', function(event){
    var stateSearch = $(event.target).text().trim();
    getApi(stateSearch);
    
})

//This is jq for the dropdown menu
$( document ).ready(function() {
    $(".dropdown-trigger").dropdown();
});
//Storing search results to Local Storage
// localStorage.setItem("search")
// document.getElementById("search").innerHTML = localStorage.getItem("search-result");
