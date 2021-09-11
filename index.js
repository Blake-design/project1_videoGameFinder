//Accordion Script(<script src="https://code.jquery.com/jquery-1.12.4.js"></script> <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>)
var showGames;
var mainGenres;
var allMainGenres;
var apiKey = "c4ce918cf9734c35b52566ea7f18c95f";
// fetch("https://api.rawg.io/api/genres?key=" + apiKey, {
//   method: "GET",
// })
//   .then((response) => {
//     console.log(response);
//     return response.json();
//   })
//   .then(function (genres) {
//     console.log(genres);
//     for (var i = 0; i < 5; i++) {
//       mainGenres = genres.results[i].name;
//       console.log(mainGenres);
//       genre.text(mainGenres);
//     }
//     console.log(genre);
//     for (var i = 1; i < genre.length; i++) {
//       console.log(genre.chartAt(i));
//     }
//     $("#button").click(function () {
//       if (mainGenres) {
//         for (var i = 0; i < 5; i++) {
//           showGames = genres.results[i].games;
//           console.log(showGames);
//         }
//       }
//       fetch(
//         fetch(`https://api.rawg.io/api/games?key=` + apiKey, {
//           method: "GET",
//         })
//       )
//         .then((data) => {
//           console.log(data);
//           return data.json();
//         })
//         .then(function (allData) {
//           console.log(allData);
//         });
// });

// $("#genre1").text(genre1);
// $("#genre2").text(genre2);
// $("#genre3").text(genre3);
// $("#genre4").text(genre4);
// $("#genre5").text(genre5);

// selectGenre1 = genres.results[0].games;
// var selectGenre2 = genres.results[1].games[0].id;
// var selectGenre3 = genres.results[2].games[0].id;
// var selectGenre4 = genres.results[3].games[0].id;
// var selectGenre5 = genres.results[4].games[0].id;
// console.log(selectGenre1);
// })

// .catch((error) => console.log(error));

$("#button").click(function () {
  fetch(`https://api.rawg.io/api/games?key=` + apiKey, {
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      game1 = {
        name: data.results[0].name,
        photo: data.results[0].background_image,
        genres: data.results[0].genres.name,
        rating: data.results[0].resultsrating_top,
      };
      console.log(game1);
      game2 = {
        name: data.results[1].name,
        photo: data.results[1].background_image,
        genres: data.results[1].genres[0].name,
        rating: data.results[1].rating_top,
      };
      console.log(game2.genres);
      game3 = {
        name: data.results[2].name,
        photo: data.results[2].background_image,
        genres: data.results[2].genres[0].name,
        rating: data.results[2].rating_top,
      };
      console.log(game3.genres);
      game4 = {
        name: data.results[3].name,
        photo: data.results[3].background_image,
        genres: data.results[3].genres[0].name,
        rating: data.results[3].rating_top,
      };
      console.log(game4.genres);
      game5 = {
        name: data.results[4].name,
        photo: data.results[4].background_image,
        genres: data.results[4].genres[0].name,
        rating: data.results[4].rating_top,
      };
      console.log(game5.genres);

      $("#photo1").attr("src", game1.photo);
      $("#photo2").attr("src", game2.photo);
      $("#photo3").attr("src", game3.photo);
      $("#photo4").attr("src", game4.photo);
      $("#photo5").attr("src", game5.photo);
    });
});
