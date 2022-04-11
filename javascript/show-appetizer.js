(function() {
  var appetizerMenuList = dishes["Appetizer"];

  var unorderedList = document.createElement("ul");

  var menuPos;
  for (menuPos = 0; menuPos < appetizerMenuList.length; menuPos++) {
    var listItem = document.createElement("li");
    var currentMenu = appetizerMenuList[menuPos];
    listItem.innerHTML = "Menu[" + menuPos + "] => " +
      currentMenu.name + ": " + currentMenu.description +
      ". " + currentMenu.price + " NOK";
    unorderedList.appendChild(listItem);
  }
  document.body.appendChild(unorderedList);
})();
