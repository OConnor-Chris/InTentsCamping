
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
        var resultEl = $('<li>').addClass('user-select').text(`${respData[i]?.name} ${respData[i].url}`)
        

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

let map, infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 6,
  });
  infoWindow = new google.maps.InfoWindow();
  const locationButton = document.createElement("button");
  locationButton.textContent = "Pan to Current Location";
  locationButton.classList.add("custom-map-control-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    // Try HTML5 geolocation.
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          infoWindow.setPosition(pos);
          infoWindow.setContent("Location found.");
          infoWindow.open(map);
          map.setCenter(pos);
        },
        () => {
          handleLocationError(true, infoWindow, map.getCenter());
        }
      );
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }
  });
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(
    browserHasGeolocation
      ? "Error: The Geolocation service failed."
      : "Error: Your browser doesn't support geolocation."
  );
  infoWindow.open(map);
}

