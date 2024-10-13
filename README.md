# HTML e CSS na prática

### Requisitos

-   Extensões
    -   Live Server (Obrigatório)
    -   Prettier (Recomendado)
    -   Material Icon (Recomendado)
    -   Portuguese (Brazil) Language pack (Opcional)
-   Programas
    -   Visual Studio Code

## </br>

### ELEMENTOS

### Elementos - Fase 1

> 1.A - Crie um elemento que servirá de contêiner para outros elementos

-   Abra o arquivo `index.html` e dentro da TAG body, pressione `enter` e digite `div#containerUm`

Observação:

<!-- prettier-ignore -->
```html
<body> <!-- Dentro da TAG body --> </body>
```

-   Pressione `ctrl + espaço` e depois `enter`
    -   Pressionar `ctrl + espaço` faz o editor sugerir um código
    -   Com `enter` você está aceitando a sugetão de código

Deve ficar assim:

```html
<body>
    <div id="containerUm"></div>
</body>
```

-   Salve o arquivo com `ctrl + s`
    -   Salve sempre que fizer uma alteração

```
Com [ id='containerUm' ], definimos um identificador ou nome único para a div.
Assim, mesmo que tenhamos várias divs, podemos selecionar cada uma individualmente
```

</br>

> 1.B - Crie um elemento imagem

-   Dentro de `containerUm`, pressione `enter`, digite `img` e aceite a sugestão do editor.

-   No atributo src entre as aspas digite `/` para escolher o caminho da imagem

-   Na sugestão do editor, escolha `img`, depois `game_logo.png` para escolher a imagem `game_logo`

Deve ficar assim:

```html
<div id="containerUm">
    <img src="/img/game_logo.png" alt="" />
</div>
```

-   Salve o arquivo

</br>

> 1.C - Crie um elemento botão

-   Ainda dentro de containerUm, abaixo de img, digite `button` e aceite a sugestão
    -   dentro de button digite "Texto do botão"

Deve ficar assim:

```html
<div id="containerUm">
    <img src="/img/game_logo.png" alt="" />
    <button>Texto do botão</button>
</div>
```

-   Salve o arquivo

</br>

> 1.D - Observe as mudanças no navegador com Live Server

-   Clique com o botão direito no arquivo `index.html` e selecione a primeira opção, "open with live server" ou "abrir com live server"

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

-   Ainda dentro de body, abaixo da div `containerUm`, crie `containerDois`

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

-   Dentro de `containerDois`, crie 3 tags `img`
    -   A primeira será `img#mario` com a imagem `player.gif`
    -   A Segunda `img#cano` com a imagem `pipe.png`
    -   E a terceira `img#nuvens` com a imagem `clouds.png`

Deve ficar assim:

```html
<div id="containerDois">
    <img src="/img/player.gif" alt="" id="mario" />
    <img src="/img/pipe.png" alt="" id="cano" />
    <img src="/img/clouds.png" alt="" id="nuvens" />
</div>
```

-   Observe as mudanças no navegador

<br/>

---

### Elementos - Fase 3

</br>

> 3.A - Defina bordas nos containers

-   Abra o arquivo `style.css`
    -   Pressione `ctrl + a` e depois `ctrl + /`
    -   Salve e veja no navegador

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

-   Apague todo o código em style.css.
    -   Basta pressionar `ctrl + a` e `delete`

</br>

---

### Elementos - Fase 4

> 4.A - Crie um terceiro container

-   Ainda dentro de body, abaixo da div `containerDois`, crie `containerTres`

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

-   Dentro de `containerTres` Crie `img#imagem_game_over` com a imagem `game_over`

-   Ainda dentro de `containerTres`, crie 2 `button` com os textos BOTAO2 e BOTAO3

Deve ficar assim:

```html
<div id="containerTres">
    <img src="/img/game_over.png" alt="" id="imagem_game_over" />

    <button>BOTAO2</button>
    <button>BOTAO3</button>
</div>
```

-   Observe as mudanças no navegador
