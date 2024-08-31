console.log("+++   Mario Minigame   +++");

// VISÕES
const visaoMenu = document.querySelector("#visaoMenu");
const visaoJogo = document.querySelector("#visaoJogo");
const visaoGameOver = document.querySelector("#visaoGameOver");

// SPRITES
const spriteJogador = document.querySelector("#spriteJogador");
const spriteCano = document.querySelector("#spriteCano");
const spriteNuvens = document.querySelector("#spriteNuvens");

// BOTÕES
const botaoStart = document.querySelector("#botaoStart");
const botaoRestart = document.querySelector("#botaoRestart");
const botaoQuit = document.querySelector("#botaoQuit");

// AUDIOS
const audioStart = new Audio("/audio/start.ogg");
const audioEnd = new Audio("/audio/end.ogg");

// BANDEIRA
let jogoEstaRodando = false;

// FUNÇÕES DO JOGO
function esconderVisoes() {
    visaoMenu.style.display = "none";
    visaoJogo.style.display = "none";
    visaoGameOver.style.display = "none";
}

function pseudoRotear(visao) {
    esconderVisoes();

    visao.style.display = "flex";

    if (visao === visaoJogo) {
        // INICIAR JOGO AO MOSTRAR visaoJogo
    }

    if (visao === visaoMenu) {
        // RESETAR JOGO AO MOSTRAR visaoMenu
    }
}

// LIDANDO COM EVENTOS
botaoStart.addEventListener("click", function () {
    pseudoRotear(visaoJogo);
});
botaoRestart.addEventListener("click", function () {
    pseudoRotear(visaoJogo);
});
botaoQuit.addEventListener("click", function () {
    pseudoRotear(visaoMenu);
});
