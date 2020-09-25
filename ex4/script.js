// Make all of the boxes blue when you click the button
// Notice that all the boxes have "class" instead of "id"


var button = document.getElementById("myButton");

button.addEventListener('click', function() {
    for (let i = 0; i < 3; i++) {
        document.getElementsByClassName('box')[i].style.backgroundColor = 'blue';
    }

})