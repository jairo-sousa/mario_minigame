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
        start(); // INICIAR JOGO AO MOSTRAR visaoJogo
    }

    if (visao === visaoMenu) {
        resetarjogo(); // RESETAR JOGO AO MOSTRAR visaoMenu
    }
}

function resetarjogo() {
    // AUDIO
    audioEnd.pause();
    audioEnd.currentTime = 0;
    audioStart.currentTime = 0;

    // PLAYER
    spriteJogador.src = "/img/player.gif";
    spriteJogador.style.bottom = "30px";
}

function start() {
    resetarjogo();
    jogoEstaRodando = true;

    audioStart.play();

    spriteCano.classList.add("slide");
    requestAnimationFrame(executarJogo);
}

function gameOver(deslocamento, alturaPulo) {
    jogoEstaRodando = false;

    // AUDIO
    audioStart.pause();
    audioEnd.play();

    // JOGADOR
    spriteJogador.classList.remove("jump");
    spriteJogador.src = "/img/player_losing.png";
    spriteJogador.style.bottom = `${alturaPulo}px`;

    // CANO
    spriteCano.classList.remove("slide");
    spriteCano.style.left = `${deslocamento}px`;

    setTimeout(() => {
        pseudoRotear(visaoGameOver);
    }, 4000);
}

function executarJogo() {
    // VERIFICAÇÃO DE COLISÃO
    const deslocamentoCano = spriteCano.getBoundingClientRect().left;
    const alturaPuloJogador =
        window.innerHeight - spriteJogador.getBoundingClientRect().bottom;

    const alinhadoVertical = deslocamentoCano <= 225 && deslocamentoCano >= 90;
    const alinhadoHorizontal = alturaPuloJogador <= 133;

    const estaColidindo = alinhadoVertical && alinhadoHorizontal;

    // LIDANDO COM EXECUÇÃO DO JOGO
    if (estaColidindo) {
        // FIM DE JOGO
        gameOver(deslocamentoCano, alturaPuloJogador);
    }

    if (jogoEstaRodando) {
        //  CONTINUAR EXECUTANDO
        requestAnimationFrame(executarJogo);
    }
}

function pular(sprite) {
    const estaPulando = sprite.classList.contains("jump");
    const permitidoPular = !estaPulando && jogoEstaRodando;

    if (permitidoPular) {
        sprite.classList.add("jump");

        setTimeout(() => {
            sprite.classList.remove("jump");
        }, 800);
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

document.addEventListener("keypress", function (evento) {
    // PULAR AO PRESSIONAR ESPAÇO
    const teclaPressionada = evento.key;

    if (teclaPressionada === " ") {
        pular(spriteJogador);
    }
});
