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

## </br>

### ROTEAMENTO

> 1 - Crie uma função para esconder as visões

Exemplo de como esconder uma visão (ou qualquer elemento) via JavaScript:

```javascript
// Definir display "none" para o elemento exemploVisao
exemploVisao.style.display = "none";
```

-   Crie a função `esconderVisoes`
-   Dentro da função, defina `display` `"none"` para a `visaoMenu`

Fica assim:

```javascript
// FUNÇÕES
function esconderVisoes() {
    visaoMenu.style.display = "none";
}
```

-   Para testar, acesse o `DevTools` e na guia console chame a função.
    -   Digite `esconderVisoes()` e pressione `enter`

```
A visaoMenu deve sumir.
Em  algum momento a visão na tela será a visaoJogo ou visaoGameOver.
Para garantir que suma qualquer que seja a visão na tela
Definimos o "display" das outra como "none" também
```

-   Ainda na função, defina `display` `"none"` para a `visaoJogo` e `visaoGameOver`

Fica assim:

```javascript
// FUNÇÕES
function esconderVisoes() {
    visaoMenu.style.display = "none";
    visaoJogo.style.display = "none";
    visaoGameOver.style.display = "none";
}
```

</br>

> 2 - Crie uma função para rotear entre as visões

```
Após esconder as visões, podemos escolher uma e voltar a mostrar ela.
Essa ação é chamada de roteamento.
Por exemplo: para rotear para "telaJogo", esconda a visões
E volte a mostrar a "telaJogo". Para mostrar, defina "display" "flex"
```

-   Crie a função `pseudoRotear`
-   Dentro da função chame `esconderVisoes`
-   Em seguida mostre a telaJogo definindo seu `display` `flex`

Fica assim:

```javascript
function pseudoRotear() {
    esconderVisoes();

    visaoJogo.style.display = "flex";
}
```

-   Chame `pseudoRotear` no navegador para mostrar a visaoJogo

```
Vamos fazer a função pseudoRotear funcionar para todas as telas
```

-   Na função crie o parâmetro `visao` em vez de `visaoJogo`, deixe apenas `visao`

Assim:

```javascript
function pseudoRotear(visao) {
    esconderVisoes();

    visao.style.display = "flex";
}
```

-   Teste o roteamento de cada tela no navegador, digitando no console
    -   `pseudoRotear(visaoJogo)`
    -   `pseudoRotear(visaoGameOver)`
    -   `pseudoRotear(visaoMenu)`

```
A essa altura epero que não esteja pensando em hackear a NASA
```

-   Ainda em `pseudoRotear`, use um `if` para verificar se a `visao` passado no parâmetro é a `visaoJogo`. Se for, deve mostrar no console: "[ visao Jogo ] - executar função start"

Assim:

```javascript
if (visao === visaoJogo) {
    console.log("[ visao Jogo ] - executar função start");
}
```

-   Faça o mesmo para `visaoMenu`, para mostrar "[ visao menu ] - executar função resetarJogo"

Assim:

```javascript
if (visao === visaoMenu) {
    console.log("[ visao menu ] - executar função resetarJogo");
}
```

</br>

```
Vamos fazer o roteamento acontecer ao clicar nos botões

Para isso crie um observador, que verifica de os botões foram clicados
Crie um para cada botão e passe uma função que chame "pseudoRotear"
Para a visão adequada
```

-   Use o código a seguir para criar um event listener que observa `botaoStart`

```javascript
// LIDANDO COM EVENTOS
botaoStart.addEventListener("click", function () {
    pseudoRotear(visaoJogo);
});
```

-   Faça o mesmo para os outros botões:

```javascript
botaoRestart.addEventListener("click", function () {
    pseudoRotear(visaoJogo);
});
botaoQuit.addEventListener("click", function () {
    pseudoRotear(visaoMenu);
});
```

-   Experimente clicar em cada botão
