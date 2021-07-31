var searchBarEL = $('<li>').appendTo('#search')
var searchResult = document.querySelector('.search-result')
var campsite = document.querySelector('#campsite')
var requestUrl = 'https://developer.nps.gov/api/v1/campgrounds/?stateCode=mn&api_key=xSn7ChieXuRmYI13uvMt5MVAakcIvQOihc2TvJMf'

// Changes the selected state in the NPS API call
// let userState = userInput.value
// let requestUrl = "https://developer.nps.gov/api/v1/campgrounds/?stateCode=" + userState + "&api_key=xSn7ChieXuRmYI13uvMt5MVAakcIvQOihc2TvJMf"

// requestUrl at the moment has Minnesota by default
function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.data[0].addresses[0].stateCode)
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

//This is jq for the dropdown menu
$( document ).ready(function() {
    $(".dropdown-trigger").dropdown();
});
// localStorage.setItem("search")
// document.getElementById("search").innerHTML = localStorage.getItem("search-result");

let map;
let service;
let infowindow;

function initMap() {
  const mpls = new google.maps.LatLng(44.9778, -93.2650);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: mpls,
    zoom: 15,
  });
  const request = {
    query: "Museum of Contemporary Art Australia",
    fields: ["name", "geometry"],
  };
  service = new google.maps.places.PlacesService(map);
  service.findPlaceFromQuery(request, (results, status) => {
    if (status === google.maps.places.PlacesServiceStatus.OK && results) {
      for (let i = 0; i < results.length; i++) {
        createMarker(results[i]);
      }
      map.setCenter(results[0].geometry.location);
    }
  });
}

function createMarker(place) {
  if (!place.geometry || !place.geometry.location) return;
  const marker = new google.maps.Marker({
    map,
    position: place.geometry.location,
  });
  google.maps.event.addListener(marker, "click", () => {
    infowindow.setContent(place.name || "");
    infowindow.open(map);
  });
}