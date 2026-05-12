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
    },
    {
        id:4,
        nome:"placa de video",
        preço:2000
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

function adicionaraocarrinho(id) {
    const produto = produtos.find(
        prod => prod.id == id
    )
    const existe = carrinho.find(
        prod => prod.id == id
    )
    if (existe) {
        existe.quantidade++
    }
    else {
        carrinho.push({
          id: produto.id,
          nome: produto.nome,
          preço: produto.preço,
          quantidade: 1
        })
    }
    mostrarcarrinho()
}

function mostrarcarrinho() {
    const listaCarrinho = document.getElementById("lista-carrinho")
    const total = document.getElementById("total")
    let somatotal = 0
    listaCarrinho.innerHTML = ""

    carrinho.forEach(produto => {
        somatotal += produto.preço * produto.quantidade

        const div = document.createElement("div")
        div.className = "cart-item"
        div.innerHTML = `
            <span>${produto.nome}(x${produto.quantidade}) - R$ ${produto.preço * produto.quantidade} </span>
            <div>
                <button onclick="mudarQuantidade(${produto.id},1)">+</button>
                <button onclick="mudarQuantidade(${produto.id},-1)">-</button>
                <button onclick="removerDoCarrinho(${produto.id})">Limpar</button>
            </div>
            
        `
        listaCarrinho.appendChild(div)
    })

    total.textContent = "Total: R$ " + somatotal
}


