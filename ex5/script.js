// Add a box to "boxContainer" everytime you click the button
// HINT: Look up createElement(), appendChild()
// HINT HINT: You can add the "box" class to elements like so: https://www.w3schools.com/howto/howto_js_add_class.asp

let addButton = document.getElementById("addButton");
let clrButton = document.getElementById("clrButton");


addButton.addEventListener('click', function() {

    let makeBox = document.createElement("div");
    makeBox.classList.add('box');
    document.getElementById('boxContainer').appendChild(makeBox);

});

clrButton.addEventListener('click', function() {
    let box = document.getElementById('boxContainer');
    box.classList.remove('box');

})