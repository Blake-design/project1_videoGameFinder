//Accordion Script(<script src="https://code.jquery.com/jquery-1.12.4.js"></script> <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>)

//API key
var apiKey = "c4ce918cf9734c35b52566ea7f18c95f";
var genreNames = [];

function updateGenreName() {}

//Fetch
fetch("https://api.rawg.io/api/genres?key=" + apiKey, {
  method: "GET",
})
  .then((response) => {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    var genreResults = data.results;
    console.log(genreResults);
    var getGenreName1 = data.results[1].name;
    var getGenreName2 = data.results[2].name;
    console.log(getGenreName1);
    $("#genre2").text(getGenreName1);
    $("#genre3").text(getGenreName2);

    var game1 = data.results[1].games[0].id;
    console.log(game1);
    $("#photo1").text(game1);

    genreResults.forEach((genre) => {
      console.log(genre.name);
      $("<button>")
        .addClass("genreButton")
        .text(genre.name)
        .on("click", function (event) {
          genreResults.forEach((genre) => {
            if (event.target.textContent === genre.name) {
              console.log(genre);
            }
          });
        })
        .appendTo($("body"));
    });
    $(document).click(
      getGenreName1,
      fetch(`https://api.rawg.io/api/games/${game1}?key=` + apiKey, {
        method: "GET",
      })
        .then((response) => {
          console.log(response);
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          var gameImage = data.background_image;
          console.log(gameImage);
          $("#photo1").attr("src", gameImage);

          // for (var i = 0; i < data.results.length; i++) {
          //   console.log(data.results[i].background_image);
          // }
        })
        .catch((err) => {
          console.error(err);
        })
    );
  })
  // .then(function (data) {
  //   console.log(data);
  //   var genreResults = data.results;
  //   console.log(genreResults);
  //   genreResults.forEach((genre) => {
  //     console.log(genre.name);
  //     $("<button>")
  //       .addClass("genreButton")
  //       .text(genre.name)
  //       .on("click", function (event) {
  //         genreResults.forEach((genre) => {
  //           if (event.target.textContent === genre.name) {
  //             console.log(genre);
  //           }
  //         });
  //       })
  //       .appendTo($("body"));
  //   });
  // })
  .catch((err) => {
    console.error(err);
  });
// document.addEventListener.selectedGenre1(
//   "click",
//   fetch("https://api.rawg.io/api/games?key=" + apiKey, {
//     method: "GET",
//   })
//     .then((response) => {
//       console.log(response);
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);

//       // for (var i = 0; i < data.results.length; i++) {
//       //   console.log(data.results[i].background_image);
//       // }
//     })
//     .catch((err) => {
//       console.error(err);
//     })
// );

// //Pictures
// $(function () {
//   $("#accordion").accordion();
// });
