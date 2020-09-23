function buscarRepo() {

    var inputValue = document.querySelector('#app input').value

    axios.get('https://api.github.com/users/' + inputValue + '/repos', carregando())
        .then(function (response) {

            const repos = response.data
            setTimeout(render(repos), 5000)


        }).catch(function (error) {

            alert('Usuário não encontrado')
        })

}

function render(repos) {
    var listElement = document.querySelector('#app ul')

    listElement.innerHTML = ""
    for (repo of repos) {
        var itemList = document.createElement('li')
        var textItem = document.createTextNode(repo.name)

        itemList.appendChild(textItem)
        listElement.appendChild(itemList)
    }
}

function carregando() {
    var listElement = document.querySelector('#app ul')

    var itemList = document.createElement('li')
    var textItem = document.createTextNode('Carregando...')

    itemList.appendChild(textItem)
    listElement.appendChild(itemList)
}