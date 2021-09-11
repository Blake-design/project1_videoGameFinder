//Accordion Script(<script src="https://code.jquery.com/jquery-1.12.4.js"></script> <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>)

//API key
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

    $("article").each(function (index) {
      $(this).children("img").attr("src", data.results[index].background_image);
      $(this).children("div").text(data.results[index].name);

      console.log(index);
    });
  });
