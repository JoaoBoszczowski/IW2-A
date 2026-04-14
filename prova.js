let input = document.getElementById("inputtarefa")
let botao = document.getElementById("botaotarefa")
let lista = document.getElementById("lista")

botao.style.background = "blue"
botao.style.color = "white"
botao.addEventListener("click", function () {
    let texto = input.value

    if (texto === "") {
        alert("Voce precisa digitar alguma coisa antes de enviar uma tarefa.")
        return;}
    let novoelemento = document.createElement("li")
    novoelemento.style.margin = "10px"
    novoelemento.textContent = (input.value)
    lista.appendChild(novoelemento)

    const btnRemover = document.createElement("button")
    btnRemover.textContent = "CONCLUIR TAREFA"
    novoelemento.appendChild(btnRemover)
    btnRemover.style.background = "green"
    btnRemover.style.color = "white"
    btnRemover.style.marginLeft = "10px"
    btnRemover.addEventListener("click", function () {
        novoelemento.remove()
    })
    input.value = ""
})
