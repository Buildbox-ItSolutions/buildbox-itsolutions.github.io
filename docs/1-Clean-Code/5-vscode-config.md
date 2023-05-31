# 1.5- Configuração VSCode

<br>
***

1.5.1- Baixar o [VSCode](https://code.visualstudio.com/)<br>

1.5.2- Instalar as seguintes extensões no VSCode: [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e [TSLint](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-tslint-plugin)<br>

1.5.3- Instalar as extensões e pacotes globalmente com os comando abaixo:<br>

    npm install -g tslint
    npm install -g eslint
<br>

1.5.4- Usar a configuração abaixo como configuração default do VSCode<br> 

    "files.eol": "\n",
    "editor.insertSpaces": false,
    "editor.renderWhitespace": "all",
    "editor.detectIndentation": false,
    "editor.tabSize": 4,
    "editor.renderControlCharacters": true,
    "editor.tabCompletion": "on",
    "editor.formatOnSave": true,
    "eslint.enable": true,
    "prettier.semi": false,
    "prettier.printWidth": 120,
    "prettier.useTabs": true,
    "prettier.tabWidth": 4,
    "prettier.singleQuote": true,
    "prettier.jsxBracketSameLine": true,
    "prettier.eslintIntegration": true,
    "prettier.tslintIntegration": true
<br>

1.5.5- Fonte opcional com Ligadures<br>

    "terminal.integrated.fontSize": 14,
    "editor.fontFamily": "Fira Code",
    "editor.fontSize": 16,
    "editor.lineHeight": 24,
    "editor.fontLigatures": true,
<br>
