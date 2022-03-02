//Get the elements
const key = document.querySelectorAll(".key");
const lClick = document.querySelector(".l-click");
const rClick = document.querySelector(".r-click");

//Assign event Listeners to the document
document.addEventListener('keydown', trackKey);
document.addEventListener('keyup', releaseKey);
document.addEventListener('mousedown', trackMouse);
document.addEventListener('mouseup', releaseMouse);
document.addEventListener('contextmenu', disableMenu);

//Add background color to pressed key
function trackKey(e) {
    for(let i = 0; i < key.length; i++) {
        if(e.keyCode == key[i].dataset.keyCode) {
            key[i].style.background = "rgba(255, 255, 255, 1)";
            key[i].style.color = "rgba(0, 0, 0, 1)";
        }
    }
}

//Remove background when a key is released
function releaseKey(e) {
    for(let i = 0; i < key.length; i++) {
      if(e.keyCode == key[i].dataset.keyCode) {
        console.log("what key was released?", e.key);
        console.log(key[i].style.background);
        key[i].style.background = "transparent";
        key[i].style.color = "rgba(255, 255, 255, 1)";
      }
    }
  }

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

/* Disable the default
pop-up menu when right clicking the mouse */
function disableMenu(e) {
    e.preventDefault();
    return false;
}