let div = document.getElementById("container")

console.log(div)

let h1 = document.querySelector(".subtitulo")

console.log (h1)

h1.textContent = "2 infonet"
div.style.backgroundColor =""

let button = document.getElementById("botao-alerta")

function geraralerta () {
    alert("teste de clique em botao")
}

button.addEventListener("click", function() {
    div.style.color = "red"
    let novoElementoP = document.createElement("p")
    novoElementoP.textContent ="teste te texto a partir do clique"

    document.body.appendChild(novoElementoP)
})

h1.addEventListener("mouseenter", function() {
    button.style.display = "none"

})

h1.addEventListener("mouseout", function() {
    button.style.display = "block"

})

let input = document.getElementById("input-numero")
let buttonmult = document.getElementById("button-mult")
let presult = document.getElementById("textofinal")

buttonmult.addEventListener("click", function () {
    let resultado = input.value * 2
    presult.textContent = resultado
})

 let input2 = document.getElementById("input-numero2")
 let input3 = document.getElementById("input-numero3")
let buttonsoma = document.getElementById("button-soma")
let resultsoma = document.getElementById("resultsoma")

buttonsoma.addEventListener("click", function () {
    let resultado = input2.value + input3.value
    resultsoma.textContent = resultado
})

