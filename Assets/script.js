var searchBarEL = $('<li>').appendTo('#search')



function getApi(requestUrl) {
    var requestUrl = "https://developer.nps.gov/api/v1/campgrounds/?&api_key=xSn7ChieXuRmYI13uvMt5MVAakcIvQOihc2TvJMf"
    
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.data[0].latLong)
      })
}

getApi(requestUrl);
//When a user searches for an area
    //Search Bar
    
    //Hit search button
    //Calling for the API
        //Calls RIBD recreation API
            //List of Campsites
        //Calls Google Maps API
            //Distance to the campsites
    //Geneorates list of campsites
    
//They are presented with a list of campsites
    //LI
        //Dynamically create

//Campsites will be listed with distance from your location

//Storing search results to Local Storage
$(document).on('keypress', function(){
    var cityValue = $('#search').val();
    var searchListEl = $('<li>').text(cityValue);

    searchListEl.appendTo('.search-results');
    
})

