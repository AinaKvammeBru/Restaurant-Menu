(function() {

    var helpers = HELPERS();
    console.log(helpers);

    var appetizerMenu = dishes["Appetizer"];
    var i;
    for(i = 0; i < appetizerMenu.length; i++){
        var menuItem = helpers.getHTMLMenuFromTitleDescriptionPrice(appetizerMenu[i].name, appetizerMenu[i].description, appetizerMenu[i].price);
        document.body.appendChild(menuItem);
    }
})();