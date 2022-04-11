(function() {
  var helpers = HELPERS();

  var i, j;
  for (i = 0; i < categories.length; i++) {
    var h3 = document.createElement("h3");
    h3.innerHTML = categories[i];
    document.body.appendChild(h3);

    var currentDishes = dishes[categories[i]];
    for (j = 0; j < currentDishes.length; j++) {
      var menuItem = helpers.getHTMLMenuFromTitleDescriptionPrice(currentDishes[j].name, currentDishes[j].description, currentDishes[j].price);
      document.body.appendChild(menuItem);
    }
  }
})();
