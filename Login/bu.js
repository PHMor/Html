const campologin = document.getElementById("login");
const camposenha = document.getElementById("senha");
const botenviar = document.getElementById("enviar");
const mensagem = document.getElementById("mensagem");
const arealogin = document.getElementById("info");
const checkbox = document.getElementById("mostrarsenha");

const logincerto = "Jabulane";
const senhacerta = 12344321;
let tentativas = 3;

checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        camposenha.type = "text";
    }
    else {
        camposenha.type = "password";
    }
})

botenviar.addEventListener("click", function() {
    let login = campologin.value;
    let senha = camposenha.value;
    if (login === "") {
        mensagem.textContent = "Digite o login.";
        mensagem.style.color = "red";
    return;
    }
    else if (login != logincerto) {
        mensagem.textContent = "Login não encontrado.";
        mensagem.style.color = "red";
    }
    if (login == logincerto && tentativas > 0) {
        if (senha != senhacerta){
            mensagem.textContent = "Senha incorreta.";
            mensagem.style.color = "red";
            tentativas -= 1;
        }

        if (senha == senhacerta) {
            arealogin.innerHTML = "<h1>Seja bem-vindo, " + logincerto + ".</h1><img src='https://pbs.twimg.com/media/Fi6hVIsXgAYu-a6.png'>";
        }
    }
    if (login == logincerto && tentativas <= 0) {
        mensagem.textContent = "Usuário bloqueado devido repetidas falhas de login..";
        mensagem.style.color = "red";
    }
});