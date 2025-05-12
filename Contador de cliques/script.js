const nome = document.getElementById("nome");
const telalogin = document.getElementById("conteudologin");
const entrar = document.getElementById("entrar");
const ola = document.getElementById("ola");
const pontuacao = document.getElementById("pontuacao")
const pontuar = document.getElementById("pontuar")
let nomeatual = "";
let nomes = JSON.parse(localStorage.getItem('nomes'));

function Avancar(){
    if(nome.value.trim() === ""){
        nome.placeholder = "Nome vazio. Digite algum nome!";
    }
    else {
        telalogin.style.display = "none";
        nomeatual = nome.value;
        ola.innerText = `Olá ${nomeatual}, seja bem vindo!`
        console.log(localStorage.getItem('nomes'))
        if(!(nomeatual in nomes)) {
            nomes[nomeatual] = 0;
        }
        pontuacao.innerText = `Seus likes: ${Number(nomes[nomeatual])}`
    }
    
}

pontuar.addEventListener('click', function(x) {
    const img = document.createElement("img")
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/250px-Heart_coraz%C3%B3n.svg.png';
    img.className = "hamburg"
    img.style.left = (x.pageX-35) + 'px';
    img.style.top = (x.pageY-20) + 'px';
    document.body.appendChild(img);
    void img.offsetWidth;
    img.style.transform = 'translateY(-80px)';
    img.style.opacity = '0';
    setTimeout(() => {
      img.remove();
    }, 1000);

})

function Salvar(){
    localStorage.setItem('nomes',JSON.stringify(nomes));
}

function Pontuar() {
    nomes[nomeatual] += 1;
    pontuacao.innerText = `Seus likes: ${Number(nomes[nomeatual])}`
    Salvar();
}

pontuar.addEventListener("click", Pontuar)
entrar.addEventListener("click", Avancar)
nome.addEventListener("input", function(){
    console.log("Nome sendo alterado...")
})
pontuar.addEventListener("mouseover", function(){
    console.log("Passando o mouse...")
    pontuar.style.scale = "1.1";
    pontuar.style.backgroundColor = "gray";
    setTimeout(() => {
        pontuar.style.scale = "1";
        pontuar.style.backgroundColor = "white";
    }, 500)
})