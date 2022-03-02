//Get the elements
const key = document.querySelectorAll(".key");

//Assign event Listeners to the document
document.addEventListener('keydown', trackKey);
document.addEventListener('keyup', releaseKey);

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