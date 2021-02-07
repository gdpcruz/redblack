function doDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "#e63946";
    button.setAttribute("disabled","true");
    setTimeout(clearDemo, 2000, button);
}

function clearDemo (button) {
    var square = document.getElementById("square");
    square.style.backgroundColor = "transparent";
    button.removeAttribute("disabled");
}