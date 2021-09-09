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
