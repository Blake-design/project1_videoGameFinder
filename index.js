//API key
var apiKey = "c4ce918cf9734c35b52566ea7f18c95f";

// Accordian

$(function () {
  $("#accordion").accordion({
    collapsible: true,
  });
  $("#accordion2").accordion({
    collapsible: true,
  });
  $("#accordion3").accordion({
    collapsible: true,
  });
  $("#accordion4").accordion({
    collapsible: true,
  });
  $("#accordion5").accordion({
    collapsible: true,
  });
});

// call API
function myFetch() {
  var genre = $(".genre").val();

  fetch("https://api.rawg.io/api/games?key=" + apiKey, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      var myArray = [];
      console.log(data);
      buildPage(data, genre);
      console.log(myArray);

      data.results.forEach((result) => {
        result.genres.forEach((responseGenre) => {
          $(".pure-button").click(function updateGames() {
            if (genre === responseGenre.name) {
              myArray.push(responseGenre);
            }
          });
        });
      });
    });
}

////this will build the page

function buildPage(data, genre) {
  $("article").each(function (index) {
    $(this)
      .children("div")
      .children("div")
      .children("h4")
      .text("ESRB Rating: " + data.results[index].esrb_rating.name);
    $(this)
      .children("div")
      .children("div")
      .children("h5")
      .text("Metacritic Rating: " + data.results[index].metacritic);
    $(this)
      .children("div")
      .children("div")
      .children("h6")
      .text("Insert data from second API HERE");
    $(this).children("div").children("h3").text(data.results[index].name);
    $(this).children("img").attr("src", data.results[index].background_image);
    $(this).children("aside").children("div").text(data.results[index].name);
  });
}

$(".button").click(myFetch());

$(".genre").change($(".genre").val());

console.log($(".genre").val());
