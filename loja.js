const produtos = [
    { 
        id:1,
        nome:"notebook",
        preço:3000,
    },
    {
        id:2,
        nome:"teclado",
        preço:300   
    },
    {
        id:3,
        nome:"mouse",
        preço:100
    }
]

let carrinho = []

function mostrarprodutos () {
    const lista = document.getElementById("lista-produtos")
    lista.innerHTML = ""

    produtos.forEach(produto => {
        const div = document.createElement("div")
        div.className = "product"

        div.innerHTML = `
        <spam>${produto.nome} - R$ ${produto.preço}</spam>
        <button onclick="adicionaraocarrinho(${produto.id})">Adicionar</button>
        `

        lista.appendChild(div)
    })
}

mostrarprodutos()
