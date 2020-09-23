var buttonElement = document.querySelector("button");
var containerElement = document.querySelector(".container");

buttonElement.onclick = () => {
    var createSquare = document.createElement("div");
    createSquare.setAttribute("onmouseover", "squareColor(this)");
    createSquare.style.width = "100px";
    createSquare.style.height = "100px";
    createSquare.style.backgroundColor = "#f00";
    createSquare.style.marginTop = "2px";

    containerElement.appendChild(createSquare);
};

function squareColor(square) {
    var newColor = getRandomColor();
    square.style.backgroundColor = newColor;
}

function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}