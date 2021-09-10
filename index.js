//Accordion Script(<script src="https://code.jquery.com/jquery-1.12.4.js"></script> <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>)

//API key
var apiKey = "c4ce918cf9734c35b52566ea7f18c95f";

//Fetch
fetch("https://api.rawg.io/api/games?key=" + apiKey, {
  method: "GET",
})
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
<<<<<<< Updated upstream
  })
  .catch((err) => {
    console.error(err);
  });

// //Pictures
// $( function() ,
//     $( "#accordion" ).accordion();
//   } );

/// create a function that loops through first 5 results in api

//// create a function that grabs the img element and replaces the content with screenshot from api

/// create a function that grabs game titles from API

/// create a pull down menu to pick genres

/// set up click event that stores selction to local storage

///set local storage to variable let that filter results
=======

    game1 = {
      name: data.results[i].name,
      photo: data.results[0].background_image,
      genres: data.results[0].genres[0].name,
      rating: data.results[0].rating_top,
    };

    game2 = {
      name: data.results[1].name,
      photo: data.results[1].background_image,
      genres: data.results[1].genres[0].name,
      rating: data.results[1].rating_top,
    };
    game3 = {
      name: data.results[2].name,
      photo: data.results[2].background_image,
      genres: data.results[2].genres[0].name,
      rating: data.results[2].rating_top,
    };
    game4 = {
      name: data.results[3].name,
      photo: data.results[3].background_image,
      genres: data.results[3].genres[0].name,
      rating: data.results[3].rating_top,
    };
    game5 = {
      name: data.results[4].name,
      photo: data.results[4].background_image,
      genres: data.results[4].genres[0].name,
      rating: data.results[4].rating_top,
    };

    $("#photo1").attr("src", game1.photo);
    $("#photo2").attr("src", game2.photo);
    $("#photo3").attr("src", game3.photo);
    $("#photo4").attr("src", game4.photo);
    $("#photo5").attr("src", game5.photo);
  });
>>>>>>> Stashed changes
