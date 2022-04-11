(function() {
    console.log(categories.length);
    var categoryPos;
    for(categoryPos = 0; categoryPos < categories.length; categoryPos++){
        console.log('categoryPos' + categoryPos);
        var newP = document.createElement("p");
        newP.innerHTML = categories[categoryPos];
        document.body.appendChild(newP);
    }
})();