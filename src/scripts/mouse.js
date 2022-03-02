//Get the elements
const lClick = document.querySelector(".l-click");
const rClick = document.querySelector(".r-click");

//Assign event Listeners to the document
document.addEventListener('mousedown', trackMouse);
document.addEventListener('mouseup', releaseMouse);

//Add background to mouse r/l click
function trackMouse(e) {
    e = e || window.event;
    switch (e.which) {
        case 1: lClick.style.background = "rgba(255, 255, 255, 1)";
        break;
        case 3: rClick.style.background = "rgba(255, 255, 255, 1)";
        break;
    }
}

//Remove background when the mouse is released
function releaseMouse() {
    rClick.style.background = "transparent";
    lClick.style.background = "transparent";
}