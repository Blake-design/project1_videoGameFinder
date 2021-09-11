//Accordion Script(<script src="https://code.jquery.com/jquery-1.12.4.js"></script> <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>)

<<<<<<< HEAD
//API key
=======
>>>>>>> d02e6a307807a0d1bf05e744c9e3428c4cdf6afe
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

    game1 = {
      name: data.results[0].name,
      photo: data.results[0].background_image,
      genres: data.results[0].genres[0].name,
      rating: data.results[0].rating_top,
    };
<<<<<<< HEAD

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

    $(".gameTitle1").text(game1.name);
    $(".gameTitle2").text(game2.name);
    $(".gameTitle3").text(game3.name);
    $(".gameTitle4").text(game4.name);
    $(".gameTitle5").text(game5.name);
=======

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
>>>>>>> d02e6a307807a0d1bf05e744c9e3428c4cdf6afe
  });
