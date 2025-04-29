let carrinho = {p1: 0, p2: 0, p3: 0};
const saldotxt = document.getElementById("saldo");
const valortxt = document.getElementById("valorcarro");
const finalizar = document.getElementById("comprar");
const limpa = document.getElementById("limpa");
const fecha = document.getElementById("fechar");
const botoesadd = document.querySelectorAll('.adicionar');
const msg = document.getElementById("msg");
const itens = document.querySelector('.itens');
const divcarrinho = document.getElementById("carrinhobox");
const abrecarro = document.getElementById("carrinho");
let saldo = 200;
let total = 0;
let nome = "";

function traduzir(cod) {
if  (cod == "p1") {
    nome = "Porta";
}
if  (cod == "p2") {
    nome = "Mesa";
}
if  (cod == "p3") {
    nome = "Cama";
}
return nome;
}

function atualizarCarrinho() {
    itens.innerHTML = '<h1>Carrinho</h1>';
    saldotxt.textContent = `Saldo: R$ ${saldo},00`;
    valortxt.textContent = `Total: R$ ${total},00`;
    const lista = document.createElement('ul');
    let temItens = false;

    for (const [produto, quantidade] of Object.entries(carrinho)) {
        if (quantidade > 0) {
            temItens = true;
            const item = document.createElement('li');
            cod = `${produto}`
            nome = traduzir(cod)
            item.textContent = `${nome}: ${quantidade}`;
            lista.appendChild(item);
        }
    }
    if (temItens) {
        itens.appendChild(lista);

    } else {
        const vazio = document.createElement('p');
        vazio.textContent = 'Carrinho vazio';
        itens.appendChild(vazio);
    }
    return temItens;
}

atualizarCarrinho();

botoesadd.forEach(button => {
    button.addEventListener('click', (event) => {
        const item = event.target.closest('.produto');
        const Idproduto = item.getAttribute('id-prod');
        let custo = item.getAttribute('valor');
        custo = Number(custo)
        total += custo;
        const chave = `p${Idproduto}`;
        carrinho[chave] += 1;
        console.log(carrinho);
        console.log(total);
        atualizarCarrinho();
    });
});

finalizar.addEventListener("click", function() {
    if (atualizarCarrinho() == false) {
        msg.textContent = "CARRIHO VAZIO"
    }
    else {
        if (total > saldo) {
            msg.textContent = "SEM SALDO POBRE"
        }
        if (total <= saldo) {
            msg.textContent = "Comprado";
            carrinho = {p1: 0, p2: 0, p3: 0};
            saldo = saldo - total;
            total = 0;
            atualizarCarrinho();
        }}
})

limpa.addEventListener("click", function() {
    console.log(carrinho);
    carrinho = {p1: 0, p2: 0, p3: 0};
    total = 0;
    atualizarCarrinho();
})

fecha.addEventListener("click", () => {
    divcarrinho.style.display = 'none';
})

abrecarro.addEventListener("click", () => {
    divcarrinho.style.display = 'block';
})

