# HTML e CSS na prática

### Requisitos

- Extensões
  - Live Server (Obrigatório)
  - Prettier (Recomendado)
  - Material Icon (Recomendado)
  - Portuguese (Brazil) Language pack (Opcional)
- Programas
  - Visual Studio Code

## </br>

### ELEMENTOS

### Elementos - Fase 1

> 1.A - Crie um elemento que servirá de contêiner para outros elementos

- Abra o arquivo `index.html` e dentro da TAG body, pressione `enter` e digite `div#containerUm`

Observação:

<!-- prettier-ignore -->
```html
<body> <!-- Dentro da TAG body --> </body>
```

- Pressione `ctrl + espaço` e depois `enter`
  - Pressionar `ctrl + espaço` faz o editor sugerir um código
  - Com `enter` você está aceitando a sugetão de código

Deve ficar assim:

```html
<body>
  <div id="containerUm"></div>
</body>
```

- Salve o arquivo com `ctrl + s`
  - Salve sempre que fizer uma alteração

```
Com [ id='containerUm' ], definimos um identificador ou nome único para a div.
Assim, mesmo que tenhamos várias divs, podemos selecionar cada uma individualmente
```

</br>

> 1.B - Crie um elemento imagem

- Dentro de `containerUm`, pressione `enter`, digite `img` e aceite a sugestão do editor.

- No atributo src entre as aspas digite `/` para escolher o caminho da imagem

- Na sugestão do editor, escolha `img`, depois `game_logo.png` para escolher a imagem `game_logo`

Deve ficar assim:

```html
<div id="containerUm">
  <img src="/img/game_logo.png" alt="" />
</div>
```

- Salve o arquivo

</br>

> 1.C - Crie um elemento botão

- Ainda dentro de containerUm, abaixo de img, digite `button` e aceite a sugestão
  - dentro de button digite "Texto do botão"

Deve ficar assim:

```html
<div id="containerUm">
  <img src="/img/game_logo.png" alt="" />
  <button>Texto do botão</button>
</div>
```

- Salve o arquivo

</br>

> 1.D - Observe as mudanças no navegador com Live Server

- Clique com o botão direito no arquivo `index.html` e selecione a primeira opção, "open with live server" ou "abrir com live server"

```
Sempre que salvar um arquivo, o Live Server vai atualizar

Agora basta deixar o navegador aberto
e voltar para elequando quiser ver as mudanças feitas
```

```
Você poderia usar qualquer imagem da pasta img.
Bastaria mudar o caminho em src, experimente
```

</br>

---

### Elementos - Fase 2

> 2.A - Crie um segundo container

- Ainda dentro de body, abaixo da div `containerUm`, crie `containerDois`

Deve ficar assim:

```html
<body>
  <div id="containerUm">
    <img src="/img/game_logo.png" alt="" />
    <button>Texto do botão</button>
  </div>

  <div id="containerDois"></div>
</body>
```

</br>

> 2.B - Adicione imagens em `containerDois`

- Dentro de `containerDois`, crie 3 tags `img`
  - A primeira será `img#mario` com a imagem `player.gif`
  - A Segunda `img#cano` com a imagem `pipe.png`
  - E a terceira `img#nuvens` com a imagem `clouds.png`

Deve ficar assim:

```html
<div id="containerDois">
  <img src="/img/player.gif" alt="" id="mario" />
  <img src="/img/pipe.png" alt="" id="cano" />
  <img src="/img/clouds.png" alt="" id="nuvens" />
</div>
```

- Observe as mudanças no navegador

<br/>

---

### Elementos - Fase 3

</br>

> 3.A - Defina bordas nos containers

- Abra o arquivo `style.css`
  - Pressione `ctrl + a` e depois `ctrl + /`
  - Salve e veja no navegador

Ficará assim:

```css
div {
  border: 1px solid red;
}
```

```
As bordas foram adicionadas aos contêineres,
permitindo visualizar claramente os limites de cada um
e a disposição dos elementos dentro deles.
```

- Apague todo o código em style.css.
  - Basta pressionar `ctrl + a` e `delete`

</br>

---

### Elementos - Fase 4

> 4.A - Crie um terceiro container

- Ainda dentro de body, abaixo da div `containerDois`, crie `containerTres`

Deve ficar com essa estrutura:

```html
<body>
  <div id="containerUm">
    <!-- Elementos de containerUm... -->
  </div>

  <div id="containerDois">
    <!-- Elementos de containerDois... -->
  </div>

  <div id="containerTres"></div>
</body>
```

```
ATENÇÃO! Você não deve APAGAR nada nessa etapa,
apenas deve adicionar "containerTres" ao final de "body"
```

</br>

> 4.B - Crie elementos para `containerTres`

- Dentro de `containerTres` Crie `img#imagem_game_over` com a imagem `game_over`

- Ainda dentro de `containerTres`, crie 2 `button` com os textos BOTAO2 e BOTAO3

Deve ficar assim:

```html
<div id="containerTres">
  <img src="/img/game_over.png" alt="" id="imagem_game_over" />

  <button>BOTAO2</button>
  <button>BOTAO3</button>
</div>
```

- Observe as mudanças no navegador

</br>

---

### ESTILOS

### Estilos - fase 1

> 1.A - Defina um estilo para os botões

- Abra o arquivo style.css

  - Digite `button`, criando assim um seletor para os botões
  - digite `{}`, entre as chaves podemos definir as propriedades

- Entre `{}` dê um `enter` e digite a propriedade `border-radius`, aceite a sugestão do editor e digite o valor da propriedade: `10px`
- Ainda em `botton`, faça o mesmo para a propriedade `border` com o valor none

Deve ficar assim

```css
button {
  border-radius: 10px;
  border: none;
}
```

```
border-radius -> Deixa os cantos arredondados
- O valor 10px (10 pixels) é o quanto deve arredondar

border -> Cria, modifica ou remove bordas
- O valor none remove as bordas
```

- Veja as mudanças no navegador

- Adicione também as seguintes propriedades e valores:
  - `width: 148px;`
  - `height: 53px;`
  - `color: #fff;`
  - `background-color: #007405;`
  - `font-size: 24px;`
  - `font-family: "Inter";`

Fica assim:

```css
button {
  border-radius: 10px;
  border: none;
  width: 148px;
  height: 53px;
  color: #fff;
  background-color: #007405;
  font-size: 24px;
  font-family: "Inter";
}
```

```
width: 148px; -> Muda a largura do botao para 148 pixels
height: 53px; -> Muda a altura do botao (53 pixels)

color: #fff; -> Muda a cor do texto
#fff é o código da cor branca
background-color: #007405; -> Muda a cor de fundo do botao
#007405 é o código de uma cor verde

font-size: 24px; -> Muda o tamanho do texto para 24 pixels
font-family: "Inter"; -> Muda a fonte para Inter
```

## </br>

### Estilos - fase 2

> 1.A - Crie 2 classes e defina prorpiedades a elas

- No arquivo `style.css` crie o seletor `.alinharCentro`
  - Usamos `.` para selecionar classes, nesse caso a classe `alinharCentro`
- Defina as propriedades:

  - `display: flex;`
  - `justify-content: center;`
  - `align-items: center;`

- crie o seletor `.mudarParaColuna`
- Defina as propriedades:
  - `display: flex;`
  - `flex-direction: column;`

Fica assim:

```css
.alinharCentro {
  display: flex;
  justify-content: center;
  align-items: center;
}

.mudarParaColuna {
  display: flex;
  flex-direction: column;
}
```

```
Agora podemos adiconar essas classes aos elementos que desejarmos
```

```
display: flex; -> muda o modo de exibição para "flex"
e permite usar as 3 propriedades a seguir
👇
justify-content: center; -> Alinha horizontalmente ao centro
align-items: center; -> Alinha vertcalmente ao centro
flex-direction: column; Elementos ficam um abaixo do outro
```

Exemplos:

```html
<!-- Uma classe(alinharCentro) na tag DIV -->
<div id="divQualquer" class="alinharCentro"></div>

<!-- Duas classe(alinharCentro e mudarParaColuna) na tag DIV -->
<div id="divQualquer" class="alinharCentro mudarParaColuna"></div>
```

</br>

> 2.B - Use as classes criadas para alinhar os elementos na tela

- No arquivo `index.html` adicione a classe `alinharCentro` na tag `body`
- Adicione as 2 classes, `alinharCentro` e `mudarParaColuna`, tanto n `containerUm` quanto no `containerTres`

Dessa forma:

<!-- prettier-ignore -->
```html
<!-- BODY -->
<body class="alinharCentro">

<!-- CONTAINER UM -->
<div id="containerUm" class="alinharCentro mudarParaColuna">

<!-- CONTAINER TRÊS -->
  <div id="containerTres" class="alinharCentro mudarParaColuna">
```

- Veja as mudanças no navegador

> 2.C - Defina o espaçamento entre os elementos dentro dos containers

- Defina a propriedade `gap` com `130px` para o `containerUm`

  - E com `20px` para `containerTres`

- Defina `margin-bottom` com `100px` para `imagem_game_over`

```
gap -> define um espaçamentos entre os elementos, nesse caso, os elementos dentro do container

margin-bottom -> define um espaçamento abaixo de um elemento.
```

</br>

> 2.D Defina os etilos finais do cenário do jogo

- No arquivo `style.css` use o seletor `body` e defina as propriedades:
  - `width: 100%;`
    - A lagura prenche toda a tela(100%)
  - `height: 100vh;`
    - A Altura prenche toda a tela(100vh)
  - `background: linear-gradient(#87ceeb, #e0f6ff);`
    - Cria um degradê entre as cores (#87ceeb e #e0f6ff) para o plano de fundo
  - `border-bottom: 30px solid #007405;`
    - Cria uma borda na parte inferior, na cor verde com 30 pixels de altura
  - `overflow: hidden;`
    - Esconde elementos que sejam posicionados além do tamanho definido na largura ou altura, evitando que haja um scroll na tela

Fica assim:

```css
body {
  width: 100%;
  height: 100vh;
  background: linear-gradient(#87ceeb, #e0f6ff);
  border-bottom: 30px solid #007405;
  overflow: hidden;
}
```

- Use o seletor `#mario` e defina:
  - `position: absolute;`
    - permite definir a posição exata na tela
  - `bottom: 30px;`
    - Define a posição na parte inferior
  - `left: 100px;`
    - Defnie a posição na parte esquerda
- Para o seletor `#cano` defina:
  - `position: absolute;`
  - `bottom: 30px;`
- Para o seletor `#nuvens` defina:
  - `position: absolute;`
  - `top: 50px;`
    - Define a posição na parte superior

Fica assim:

```css
#mario {
  position: absolute;
  bottom: 30px;
  left: 100px;
}

#cano {
  position: absolute;
  bottom: 30px;
}

#nuvens {
  position: absolute;
  top: 50px;
}
```

```
Os elementos devem estar em uma posição um pouco estranha
para resolver isso basta colar o seguinte código no iníco do arquivo style.css
```

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

Esse código seleciona todos os elementos com `*` </br>
E define o espaçamento externo (`margin`) e interno (`padding`) como `0` </br>
O `box-sizing: border-box;` Deixa o tamanho total do elemento como a soma dos espaçamentos internos e bordas.

- Tanto para `containerDois` quanto para `containerTres` defina:
  - `display: none`
    - Esconde o elemento da tela

Fica assim:

```css
#containerDois {
  display: none;
}

#containerTres {
  display: none;
}
```

Fim da trinlha CSS
