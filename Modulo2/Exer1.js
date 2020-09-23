var buttonElement = document.querySelector("button");
var containerElement = document.querySelector(".container");

buttonElement.onclick = () => {
    var createSquare = document.createElement("div");
    createSquare.style.width = "100px";
    createSquare.style.height = "100px";
    createSquare.style.backgroundColor = "#f00";
    createSquare.style.marginTop = "2px";

    containerElement.appendChild(createSquare);
};