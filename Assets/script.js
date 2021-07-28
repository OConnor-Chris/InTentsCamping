var requestUrl = "https://developer.nps.gov/api/v1/activities/?&api_key=xSn7ChieXuRmYI13uvMt5MVAakcIvQOihc2TvJMf"


function getApi(requestUrl) {
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data.data[11])
      })
}

getApi(requestUrl);

// curl -X GET "https://developer.nps.gov/api/v1/activities/parks?api_key=xSn7ChieXuRmYI13uvMt5MVAakcIvQOihc2TvJMf" -H "accept: application/json"