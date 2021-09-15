var apiKey = "c4ce918cf9734c35b52566ea7f18c95f";

// Accordian

$(".accordion").each(function () {
  $(this).accordion({
    event: "mouseover",
    collapsible: true,
  });
});

// call API
function myFetch(change) {
  var selectedGenre = $("#genre").val();
  if (change) {
    selectedGenre = change;
  }
  console.log(selectedGenre);

  fetch("https://api.rawg.io/api/games?key=" + apiKey, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then(function (data) {
      var videoGameArray = [];
      console.log(data);

      data.results.forEach((result) => {
        result.genres.forEach((responseGenre) => {
          console.log(responseGenre);
          console.log(selectedGenre);
          if (selectedGenre === responseGenre.name) {
            videoGameArray.push(result);
          }
        });
      });

      console.log(videoGameArray);
      buildPage(videoGameArray);
    });
}

////this will build the page

function buildPage(data, genre) {
  if (!data) {
    return;
  }

  $("article").each(function (index) {
    $(this)
      .children("div")
      .children("div")
      .children("h4")
      .text("ESRB Rating: " + data[index].esrb_rating.name);
    $(this)
      .children("div")
      .children("div")
      .children("h5")
      .text("Metacritic Rating: " + data[index].metacritic);
    $(this)
      .children("div")
      .children("div")
      .children("h6")
      .text("Insert data from second API HERE");
    $(this).children("div").children("h3").text(data[index].name);
    $(this).children("img").attr("src", data[index].background_image);
    $(this).children("aside").children("div").text(data[index].name);
  });
}

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
    `https://www.cheapshark.com/api/1.0/deals?storeID=1,2,11&upperPrice=15`,

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

getDeals();

$(".button").click(myFetch());

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

  function toggleClass(element, className) {
    var classes = element.className.split(/\s+/);
    var length = classes.length;
    var i = 0;

    for (; i < length; i++) {
      if (classes[i] === className) {
        classes.splice(i, 1);
        break;
      }
    }
    // The className is not found
    if (length === classes.length) {
      classes.push(className);
    }

    element.className = classes.join(" ");
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
$("#genre").on("change", function (event) {
  myFetch(event.target.value);
});

var wishesInput = document.querySelector("#wish");
var wishesForm = document.querySelector("#wishList");
var wishesList = document.querySelector("#items");

var wishes = [];

function renderWishes() {
  // Clear todoList element and update todoCountSpan
  wishesList.innerHTML = "";

  // Render a new li for each todo
  for (var i = 0; i < wishes.length; i++) {
    var wish = wishes[i];

    var li = document.createElement("li");
    li.textContent = wish;
    li.style.marginTop = "1.5rem";
    li.style.fontSize = "1.5rem";
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "✘";

    li.appendChild(button);
    wishesList.appendChild(li);
  }
}

function init() {
  var storedWishes = JSON.parse(localStorage.getItem("wishes"));

  if (storedWishes !== null) {
    wishes = storedWishes;
  }

  renderWishes();
}

function storeWishes() {
  localStorage.setItem("wishes", JSON.stringify(wishes));
}

wishesForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var wishText = wishesInput.value.trim();

  if (wishText === "") {
    return;
  }

  wishes.push(wishText);
  wishesInput.value = "";

  storeWishes();
  renderWishes();
});

wishesList.addEventListener("click", function (event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    wishes.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeWishes();
    renderWishes();
  }
});

init();
