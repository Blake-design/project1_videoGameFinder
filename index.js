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

$(".genre").change($(".genre").val());

console.log($(".genre").val());

//Game deals
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

//Moduel 6.3

var tableBody = document.getElementById("repo-table");
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

// ////// add to wish list

// var items = $("#items");

// var wishes = [];

// // The following function renders items in a todo list as <li> elements
// function renderWishes() {
//   // Clear todoList element and update todoCountSpan
//   $("#wishList").html("")
//   $("#gameCount").text(wishes.length);

//   // Render a new li for each todo
//   for (var i = 0; i < wishes.length; i++) {
//     var wish = wishes[i];

//     var li = $("<li></li>").text(wish);

//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

// function init() {
//   // Get stored games from localStorage
//   var storedWishes = JSON.parse(localStorage.getItem("wish"));

//   // If todos were retrieved from localStorage, update the todos array to it
//   if ($("#wish") !== null) {
//     wish = $("#wish");
//   }

//   renderWishes();
// }

// function storeWishes() {
//   // Stringify and set key in localStorage to todos array
//   localStorage.setItem("wish", JSON.stringify(wish));
// }

// // Add submit event to form

// $("wish").submit(function (e) {
//   e.preventDefault();

//   var wishText = wish.value().trim();

//   // Return from function early if submitted todoText is blank
//   if (wishText === "") {
//     return;
//   }

//   // Add new todoText to todos array, clear the input
//   wish.push(wishText);
//   wish.val("");

//   // Store updated todos in localStorage, re-render the list
//   storeWishes();
//   renderWishes();
// });

// // Add click event to todoList element
// todoList.addEventListener("click", function (event) {
//   var element = event.target;

//   // Checks if element is a button
//   if (element.matches("button") === true) {
//     // Get its data-index value and remove the todo element from the list
//     var index = element.parentElement.getAttribute("data-index");
//     todos.splice(index, 1);

//     // Store updated todos in localStorage, re-render the list
//     storeTodos();
//     renderTodos();
//   }
// });

// // Calls init to retrieve data and render it to the page on load
// init();
