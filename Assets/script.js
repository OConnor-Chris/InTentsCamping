var searchBarEL = $('<li>').appendTo('#search')
var searchResult = document.querySelector('.search-result')
var campsite = document.querySelector('#campsite')
var requestUrl = 'https://developer.nps.gov/api/v1/campgrounds/?&api_key=xSn7ChieXuRmYI13uvMt5MVAakcIvQOihc2TvJMf'


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
localStorage.setItem("search")
document.getElementById("search").innerHTML = localStorage.getItem("search-result");
