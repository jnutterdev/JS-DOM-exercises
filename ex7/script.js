// Make the section disappear and reappear whenever you click the section-header
// BONUS: Can you make the section slide up and down like this? :
// https://www.w3schools.com/bootstrap/bootstrap_collapse.asp

var clicker = document.getElementById("section-header");

clicker.addEventListener('click', function() {

    var hideSection = document.getElementById("section");
    if (hideSection.style.display === "none") {
        hideSection.style.display = "block";
    } else {
        hideSection.style.display = "none";
    }

})