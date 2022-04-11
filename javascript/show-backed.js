(function() {
  var backedMenu = dishes["Appetizer"][0];
  var menuTitle = backedMenu.name;
  var menuDescription = backedMenu.description;
  var menuPrice = backedMenu.price;

  var divMenu = document.createElement("div");
  divMenu.className = "menu-item";

  var htmlTitle = getTitleElement(menuTitle);
  divMenu.appendChild(htmlTitle);

  var paragraphWithPriceAndDescription = getParagraphWithDescriptionAndPrice(menuDescription, menuPrice);
  divMenu.appendChild(paragraphWithPriceAndDescription);


  document.body.appendChild(divMenu);

  function getTitleElement(title) {
    var titleH2 = document.createElement("h2");
    titleH2.innerHTML = title;
    return titleH2;
  }

  function getDescriptionElement(description) {
    var descSpan = document.createElement("span");
    descSpan.innerHTML = description;
    return descSpan;
  }

  function getPriceElement(price) {
    var priceSpan = document.createElement("span");
    priceSpan.innerHTML = price + " NOK";
    priceSpan.className = "price";
    return priceSpan;
  }

  function getParagraphWithDescriptionAndPrice(description, price) {
    var p = document.createElement("p");

    var htmlDesc = getDescriptionElement(description);
    p.appendChild(htmlDesc);

    var htmlPrice = getPriceElement(price);
    p.appendChild(htmlPrice);
    return p;
  }
})();
