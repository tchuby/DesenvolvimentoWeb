(function() {

  $.ajax({
    beforeSend: function (request) {
      request.setRequestHeader("X-Api-Key", "")
    },
    type: "GET",
    dataType: "json",
    url: "https://api.api-ninjas.com/v1/airports?min_elevation=1",
    success: function(dataNinja) {
      console.log(dataNinja);
      $("#aeroportos").DataTable({
        data: dataNinja,
        columns: [
          {'data':'icao'},
          {'data':'name'},
          {'data':'city'},
          {'data':'country'},
          {'data':'elevation_ft'},
          {'data':'latitude'},
          {'data':'longitude'},
          {'data':'timezone'},
        ]
      });
    },
    error: function ajaxError(jqXHR) {
      console.error('Error: ', jqXHR.responseText);
    }
  })

})();