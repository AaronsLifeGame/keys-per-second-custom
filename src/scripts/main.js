//Assign event Listeners to the document
document.addEventListener('contextmenu', disableMenu);

/* Disable the default
pop-up menu when right clicking the mouse */
function disableMenu(e) {
    e.preventDefault();
    return false;
}