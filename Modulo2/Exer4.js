var listElement = document.querySelector("#name");
var divElement = document.querySelector(".container");

var nomes = ["Diego", "Gabriel", "Lucas"];

renderizar()

var createInput = document.createElement("input");
createInput.setAttribute("type", "text");
createInput.setAttribute("name", "nome");

var createButton = document.createElement("button");
var textButton = document.createTextNode("Adicionar");
createButton.appendChild(textButton);

divElement.appendChild(createInput);
divElement.appendChild(createButton);

var buttonElement = document.querySelector('button')

function renderizar() {
    listElement.innerHTML = ""
    for (var nome of nomes) {
        var createItem = document.createElement("li");
        var itemText = document.createTextNode(nome);
        createItem.appendChild(itemText);
        listElement.appendChild(createItem);
    }
}

buttonElement.onclick = () => {
    var nome = document.querySelector("input");
    nomes.push(nome.value);
    renderizar()
    nome.value = "";
}