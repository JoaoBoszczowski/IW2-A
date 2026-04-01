let botao = document.getElementById("btnClique")

let texto = document.getElementById("texto")

botao.addEventListener ("click", function () {
    alert("O Botão foi precionado")
    texto.textContent = "Texto Novo"
})

let inputnome = document.getElementById("inputNome")

let botaonome = document.getElementById("btnMostrar")

botaonome.addEventListener ("click", function () {
    alert("o nome digitado foi: " + inputnome.value)
})

let lista = document.getElementById("lista")

let botaolista = document.getElementById("btnAdicionar")

botaolista.addEventListener("click", function() {
    let novoelemento = document.createElement("li")
    novoelemento.textContent = "Novo Elemento"
    lista.appendChild(novoelemento)
})

let botaocor = document.getElementById("btnCor");
let caixa = document.getElementById("caixa"); 

botaocor.addEventListener("click", function () {
    caixa.style.backgroundColor = "navy";
});

let coratual = false;
botao4.addEventListener("click", function () {
    coratual = !coratual;
    if (coratual) {
        botao4.style.backgroundColor = "blue";
    } else {
        botao4.style.backgroundColor = "brown";
    }
});

let cont = 0;
botao1.addEventListener("click", function () {
    cont ++;
    console.log("Cliques: " + cont);
});

let botao5 = document.getElementById("btnRemover");
botao5.addEventListener("dblclick", function () {
    let ultimoFilho = lista.lastElementChild;
    lista.removeChild(ultimoFilho);
});
