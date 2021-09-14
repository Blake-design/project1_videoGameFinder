//API key
var apiKey = "c4ce918cf9734c35b52566ea7f18c95f";

// Accordian

$(".accordion").each(function () {
  $(this).accordion({
    event: "mouseover",
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

$(".genre").change($(".genre").val());

console.log($(".genre").val());

//Game deals
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

//Moduel 6.3

var search = $("#searchValue").val();
function getDeals() {
  fetch(
    "https://www.cheapshark.com/api/1.0/deals?storeID=1,2,11&upperPrice=15",

    {
      method: "GET",
      redirect: "follow",
    }
  )
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      $("ul").each(function (i) {
        var newGameTitle = $("<li></li>").text(data[i].title);
        var gameSalePrice = $("<p></p>")
          .text("Sale Price: " + data[i].salePrice)
          .addClass("sale");
        var gameNormalPrice = $("<p></p>")
          .text("Normal Price: " + data[i].normalPrice)
          .addClass("norm");
        $(this).append(newGameTitle, gameSalePrice, gameNormalPrice);
      });
    });
}

$("#fetch-button").click(getDeals);

$(".button").click(myFetch());

$(".genre").change($(".genre").val());

/////this below is for the side menu
(function (window, document) {
  // we fetch the elements each time because docusaurus removes the previous
  // element references on page navigation
  function getElements() {
    return {
      layout: document.getElementById("layout"),
      menu: document.getElementById("menu"),
      menuLink: document.getElementById("menuLink"),
    };
  }

  function toggleAll() {
    var active = "active";
    var elements = getElements();
    g;

    toggleClass(elements.layout, active);
    toggleClass(elements.menu, active);
    toggleClass(elements.menuLink, active);
  }

  function handleEvent(e) {
    var elements = getElements();

    if (e.target.id === elements.menuLink.id) {
      toggleAll();
      e.preventDefault();
    } else if (elements.menu.className.indexOf("active") !== -1) {
      toggleAll();
    }
  }

  document.addEventListener("click", handleEvent);
})(this, this.document);

//Wish list
var wishListFormEl = $("#wishList");
var wishListEl = $("#items");

function handleFormSubmit(event) {
  event.preventDefault();

  var wishItem = $('input[name="wish"]').val();

  if (!wishItem) {
    console.log("No wish item filled out in form!");
    return;
  }

  wishListEl.append("<li>" + wishItem + "<li>");

  $('input[name="wish"]').val("");

  localStorage.setItem("wishItem", JSON.stringify(wishItem));
}
wishListFormEl.on("submit", handleFormSubmit);
