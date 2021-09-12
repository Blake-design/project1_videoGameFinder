//Accordion Script(<script src="https://code.jquery.com/jquery-1.12.4.js"></script> <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>)

//API key
var apiKey = "c4ce918cf9734c35b52566ea7f18c95f";
var selectedGenre;
//Fetch
$(function () {
  $("#accordion").accordion({
    collapsible: true,
  });
});

$(".pure-img").click(function () {
  $("#accordion").css("display", "flex");
});
$("#accordion").dblclick(function () {
  $(this).css("display", "none");
});
// $("#accordion").click(function showGameInfo() {
//   // show the element
//   $(this).css("display", "flex");
// });

// call API
function myFetch() {
  var genre = $(".genre").val();

  fetch("https://api.rawg.io/api/games?key=" + apiKey, {
    method: "GET",
  })
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      var myArray = [];
      console.log(data);
      buildPage(data, genre);
      console.log(genre);
      data.results.forEach((result) => {
        console.log(result);
        result.genres.forEach((responseGenre) => {
          console.log(responseGenre);
          $(".pure-button").click(function updateGames() {
            if (genre === responseGenre.name) {
              myArray.push(responseGenre);
            }
          });
        });
      });
      console.log(myArray);
    });
}

function buildPage(data, genre) {
  $("article").each(function (index) {
    $(this).children("img").attr("src", data.results[index].background_image);
    $(this).children("aside").children("div").text(data.results[index].name);
  });
}

myFetch();

$(".genre").on("change", myFetch($(".genre").val()));

console.log($(".genre").val());
