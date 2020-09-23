function buscarRepo() {
    var inputValue = document.querySelector('#app input').value
    var listElement = document.querySelector('#app ul')

    axios.get('https://api.github.com/users/' + inputValue + '/repos')
        .then(function (response) {

            const repos = response.data

            for (repo of repos) {
                var itemList = document.createElement('li')
                var textItem = document.createTextNode(repo.name)

                itemList.appendChild(textItem)
                listElement.appendChild(itemList)
            }

        }).catch(function (error) {
            console.log(error)
        })

}