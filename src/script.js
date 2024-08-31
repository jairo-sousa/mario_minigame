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
