# JavaScript na prática

### Requisitos

-   Conhecimentos / experiência
    -   Ter realizado a atividade [css_path](https://github.com/jairo-sousa/mario_minigame/tree/css_path)
    -   Ter realizado a atividade [javascript_introduction](https://github.com/jairo-sousa/javascript_introduction)

</br>

-   Programas
    -   Visual Studio Code
-   Extensões do Visual Studio Code
    -   Live Server (Obrigatório)
    -   Template String Converter (Recomendado)
    -   Prettier (Recomendado)
    -   Material Icon (Recomendado)
    -   Portuguese (Brazil) Language pack (Opcional)

## </br>

### VARIÁVEIS

> 1 - Crie as variáveis globais para as visões do jogo

```
O jogo tem 3 "telas" que vamos chamar de "visões"
Elas são: a visão do menu inicial, visão do jogo
e visão de game over

Existem 3 divs no arquivo index.html com os segintes IDs:
visaoMenu, visaoJogo e VisaoGameOver
Você pode conferir se quiser
```

-   Abra o arquivo `script.js` e nele digite `// VISOES`
    -   OBS: `//` serve para comentários. Usaremos para organizar o código
-   quebre linha com `enter` e crie uma const de nome `visaoMenu`

```
Queremos que a const visaoMenu, seja o a div com a imagem game_logo

Para isso usamos a função "querySelector", do objeto "document"
passando o seletor "#visaoMenu"
```

-   Defina o valor de `visaoMenu` como `document.querrySelector("#visaoMenu")`
-   Lembre de salvar o arquivo

Deve ficar assim;

```javascript
console.log("+++   Mario Minigame   +++");

// VISOES
const visaoMenu = document.querySelector("#visaoMenu");
```

Vamos testar

-   Abra `index.html` com Live server e pressione `f12` com o navegador aberto para acessar o `DevTools`
-   Na parte superior, selecione a guia `console`
-   Digite `visaoMenu`

```
Se estiver tudo certo, a imagem e o botão
devem ficar realçados na cor azul

E ao pressionar enter deve aparecer um código semelhante a esse:
```

```html
<div id="visaoMenu" class="flexCenter">…</div>
```

-   Crie também as variáveis visaoJogo e visaoGameOver

deve ficar assim:

```javascript
// VISOES
const visaoMenu = document.querySelector("#visaoMenu");
const visaoJogo = document.querySelector("#visaoJogo");
const visaoGameOver = document.querySelector("#visaoGameOver");
```

```
Com essas variáveis poderemos maipular os elementos
na tela de forma dinâmica e automatizada
```

</br>

> 2 - Crie as variáveis globais restantes

-   Crire variaves para as sprites: spriteJogador, srpiteCano e spriteNuvens
-   E para os botões: botaoStart, botaoRestart, botaoQuit

ficará assim:

```javascript
// SPRITES
const spriteJogador = document.querySelector("#spriteJogador");
const spriteCano = document.querySelector("#spriteCano");
const spriteNuvens = document.querySelector("#spriteNuvens");

// BOTOES
const botaoStart = document.querySelector("#botaoStart");
const botaoRestart = document.querySelector("#botaoRestart");
const botaoQuit = document.querySelector("#botaoQuit");
```

```
Agora criaremos 2 variáveis de audio: audioStart e audioEnd
Cada uma será uma nova(new) instância da classe audio
Passamos como parâmetro o caminho até o audio
```

Exemplo

```javascript
const audioQuaquer = new Audio("<CAMINHO PARA O AUDIO AQUI>");
```

-   Crie `audoStart` e `audioEnd` com os caminhos:
    -   `/audio/start.ogg`
    -   `/audio/end.ogg`

Deve ficar assim:

```javascript
// AUDIOS
const audioStart = new Audio("/audio/start.ogg");
const audioEnd = new Audio("/audio/end.ogg");
```

-   Por fim usando `let`, crie `jogoEstaRodando` com valor `false`

```
Podemos usar essa variável como uma bandeira
Quando levantada (true) avisa que o jogo está rodando
Quando Baixada (false) avisa que o jogo não está rodando
```

```javascript
// BANDEIRA
let jogoEstaRodando = false;
```
