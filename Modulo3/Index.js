var listElement = document.querySelector('#app ul')
var inputElement = document.querySelector('#app input')
var buttonElement = document.querySelector('#app button')

/*
var tarefas = [
    'Acordar cedo',
    'Arrumar a casa',
    'Trabalhar'
]
*/

var tarefas = JSON.parse(localStorage.getItem('listTodos'))

render()

buttonElement.onclick = () => {
    var newTodo = inputElement.value

    tarefas.push(newTodo)
    inputElement.value = ""
    render()
    saveToStorage()
}

function deleteTarefa(pos) {
    tarefas.splice(pos, 1)
    render()
    saveToStorage()
}

function saveToStorage() {
    localStorage.setItem('listTodos', JSON.stringify(tarefas))
}

function render() {
    listElement.innerHTML = ''
    for (tarefa of tarefas) {
        var todoElement = document.createElement('li')
        var todoText = document.createTextNode(tarefa)

        var linkElement = document.createElement('a')
        linkElement.setAttribute('href', '#')

        var pos = tarefas.indexOf(tarefa)
        linkElement.setAttribute('onclick', 'deleteTarefa(' + pos + ')')
        var linkText = document.createTextNode('Excluir')

        linkElement.appendChild(linkText)
        todoElement.appendChild(todoText)
        todoElement.appendChild(linkElement)
        listElement.appendChild(todoElement)
    }
}





