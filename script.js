$("#search").on('click', function() { 
  const title = $('#movie-name').val();         
  $.ajax('http://www.omdbapi.com/?apikey=7722430f&t='+title).done(function(response){                   
        let container = $("#result-container");
        if (response.Response === "False") {
          alert(response.Error);
        } else {
        for (let key in response) {
          if (key === 'Title') {
            container.append(`<div>${key} ${response[key]}</div>`); 
          }
          if (key === 'Actors') {
            container.append(`<div>${key} ${response[key]}</div>`); 
          }
          if (key === 'Awards') {
            container.append(`<div>${key} ${response[key]}</div>`); 
          }
          if (key === 'Poster') {
            container.append(`<div><img src="${response[key]}"></div>`); 
          }
        }
      }
    });
});




