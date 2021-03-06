
var searchResult = document.querySelector('.search-result');
var campsite = document.querySelector('#campsite');
//var userState = $('#state-select').val();

function getApi(userState) {
    var requestUrl = "https://developer.nps.gov/api/v1/campgrounds?stateCode=" + userState + "&limit=10&api_key=kdwUFElfnyssbQAQVTTsu4o686nGIvszl3ymx0IW"
        
    fetch(requestUrl)
        .then(function(response){
            return response.json();
        })
        .then(function (npsResponseArray) {
           renderResults(npsResponseArray);
        })
}

function renderResults(npsApiResponse) {
    // console.log(npsApiResponse);
    var respData = npsApiResponse.data;
    for (let i = 0; i < respData.length; i++) {
        // ? a condition that checks if the property exists
        var resultEl = $('<li>').addClass('user-select');
        var anchorEl = $('<a>').text(`${respData[i]?.name}`).attr("href", `${respData[i].url}`);
        resultEl.append(anchorEl);
        $('.search-results').append(resultEl);
        
    }
}
//When user selects the campsite
    //Generate a route to the campsite
        //Pop-out? Second page?

let map;
let service;
let infowindow;

function initMap(x) {
  const minnesota = new google.maps.LatLng(45.84296, -94.37325);
  infowindow = new google.maps.InfoWindow();
  map = new google.maps.Map(document.getElementById("map"), {
    center: minnesota,
    zoom: 6,
  });
  const request = {
    query: x,
    fields: ["name", "geometry"],
  };
  service = new google.maps.places.PlacesService(map);
  if (!x){
    return;
  }
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

function LocalStorage() {
  var state = localStorage.getItem('state');
  

  if(!state){
      return;
  }
  stateSelectSpan.textContent = state;
  

}

// dropdown.addEventListener("click", function(event) {
//   event.preventDefault();

//   var state = document.querySelector("#state").value;

//   localStorage.setItem("state", state);

// })



//Campsites will be listed with distance from your location

 //When a user selects a State from the dropdown list
    //Dynamically generate a list of campsites in that state

$(document).on('click', '.list', function(event){
    var userState = $(event.target).text().trim();
    var stateEl = $('<p>').text(userState);
    
    
    stateEl.appendTo('.user-choice');
    $('#state-select').val(userState);

    getApi(userState);
    initMap(userState);

   
    localStorage.setItem("#state-select", JSON.stringify(userState));
    

})

//This is jq for the dropdown menu
$( document ).ready(function() {
    $(".dropdown-trigger").dropdown();
});
//Storing search results to Local Storage