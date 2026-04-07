let input = document.getElementById("inputtarefa")
let botao = document.getElementById("botaotarefa")
let lista = document.getElementById("lista")

botao.addEventListener("click", function () {
    let novoelemento = document.createElement("li")
    novoelemento.textContent = (input.value)
    lista.appendChild(novoelemento)

    const btnRemover = document.createElement("button")
    btnRemover.textContent = "CONCLUIR TAREFA"
    novoelemento.appendChild(btnRemover)
    btnRemover.style.background = "green"
    btnRemover.addEventListener("click", function () {
        novoelemento.remove()
    })
})


