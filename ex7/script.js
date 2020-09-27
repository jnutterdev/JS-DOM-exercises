// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var clicker = document.getElementById("section-header");
var hideSection = document.getElementById("section");

clicker.addEventListener('click', function() {


    if (hideSection.style.display === 'block') {
        hideSection.style.display = "none";
    } else {
        hideSection.style.display = "block";
    }

    // hideSection.style.visibility == "visible" || !hideSection.style.visibility ?
    //     (section.style.visibility = "hidden") :
    //     (section.style.visibility = "visible");

})