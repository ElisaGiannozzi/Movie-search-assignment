$("#search").on('click', function() { 
  const title = $('#movie-name').val();         
  $.ajax('http://www.omdbapi.com/?apikey=7722430f&t='+title).done(function(response){                   
        let container = $("#text-container");
        let imgContainer = $('#img-container'); 
        $('#text-container').empty(); 
        $('#img-container').empty(); 
        $('#movie-name').keydown(function(e){
          if(e.which === 13){
              $("#search").click();
          }
        });
        if (response.Response === "False") {
          alert(response.Error);
        } else {
        for (let key in response) {
          if (key === 'Title') {
            container.append(`<div>${key}: ${response[key]}</div>`); 
          }
          if (key === 'Actors') {
            container.append(`<div>${key}: ${response[key]}</div>`); 
          }
          if (key === 'Awards') {
            container.append(`<div>${key}: ${response[key]}</div>`); 
          }
          if (key === 'Genre') {
            container.append(`<div>${key}: ${response[key]}</div>`); 
          }
          if (key === 'Language') {
            container.append(`<div>${key}: ${response[key]}</div>`); 
          }
          if (key === 'Poster') {
            imgContainer.append(`<div><img src="${response[key]}"></div>`); 
          }
        }
      }
    });
});





