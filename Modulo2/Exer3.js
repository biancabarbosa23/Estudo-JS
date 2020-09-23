var listElement = document.querySelector("#name");
var nomes = ["Diego", "Gabriel", "Lucas"];

for (var nome of nomes) {
    var createItem = document.createElement("li");
    var itemText = document.createTextNode(nome);
    createItem.appendChild(itemText);
    listElement.appendChild(createItem);
}