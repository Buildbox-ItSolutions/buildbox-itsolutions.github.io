# 1.1- Nomenclatura
<br>

***

### 1.1.1- Usar as seguintes notações de caixa
- Nomes de variáveis, propriedades, funções, argumentos de funções: Usar **camelCase**<br>
- Nomes de Componentes React, Classes: Usar **PascalCase**<br>
- Nomes de interfaces (TypeScript): Iniciar com 'I' maiúsculo, por ex: IUser
- Nomes de ENUMS: Iniciar com 'E' maiúsculo, por ex: EUserStatus
<br>

***

### 1.1.2- Usar nomes descritivos e com significado
<br>
Usar nomes que descrevem claramente e de forma distinta o conteúdo da variável, sem usar abreviações que obrigariam o leitor a procurar o significado; explícito é melhor do que implícito.<br>

Por exemplo:<br>

    // Bad 😕 
    locations.forEach(l => {
        // Several lines of code, here
        // ...
        dispatch(l)  // Trying to remenber what `l` means...
    })

    // Good 😀
    locations.forEach(location => {
        // Several lines of code, here
        // ...
        dispatch(location)  // No waste of time to remember
    })

<br>

#### Variáveis, propriedades e argumentos de funções<br> 
Usar substantivos, simples ou compostos<br>

    // Good 😀
    const colors = ['blue', 'green', 'yellow']
    const color = { name: 'blue', hex: '#800080' }
    const numberOfColors = 5
    const numberOfSelectedColors = 2
<br>
Usar um adjetivo seguido por um substantivo<br>

    // Good 😀
    const targetColor = 'purple'
    const reservedBook = { 
        title: 'The Sun Also Rises', 
        author: 'Ernest Hemingway'
    }
<br>
No caso de variáveis *boolean*, usar perguntas<br>
    
    // Good 😀
    const isLogged = true
    const isColorSelected = false
    const isColorValida = true    
<br>
Nomes ruins<br>

    // Bad 😕
    const TargetColor = "purple"
    const fnd = true
    const list = ["blue", "green", "yellow"]
    const obj = { color: "blue", hex: "#800080" }
    const num = 5

    if (exist) {
        // ...
    }
<br>

#### Funções e métodos

Usar o verbo que descreve o propósito da função + um objeto direto ou indireto<br>

    // Good 😀
    function parseItemPrice({ price }:{ price: string }) {...}
    function calculateTotalCost() {...}
    function getDeliveryDate() {...}
    function getRelativeShippingInfo() {...}
    function saveUserData() {...}
    function validateForm() {...}
    function displayErrorMessage() {...}
    function deleteElement() {...}
    function fetchAiAPI() {...}
<br>
Com TypeScript, alguns casos simples permitem o uso apenas do objeto direto, sem o verbo<br>

    // Good 😀
    function toNumber({ price }:{ price: string })  {...}  // uma contração de convertStringToNumber() 

<br>
Nomes ruins para funções ou métodos<br>

    // Bad 😕
    function deliveryDate() {...}   // Falta o verbo
    function func1() {...}          // Não diz nada 
    function test() {...}           // Testa o quê?
    function fetch() {...}          // Faz um fetch em quê?
    function process() {...}        // Não diz nada
    function run() {...}            // Executa o quê?

<br>

Comentar os casos em que a biblioteca já me dá nomes padrão, do tipo isLoading, fecth, etc.
Explicar que, quando possível, devemos sobrescrever tais nomes.

#### Componentes
Os nomes dos componentes devem usar a convenção *PascalCase*, ou seja, todas as palavras iniciam com letra maiúscula.<br>
Além disso, embora usemos componentes React funcionais, (funções JavaScript, ao invés de classes), devemos usar substantivos ou substantivos compostos, **sem uso** do verbo, como no caso das funções.<br>

    // Good 😀
    function Buttom(...) {...}
    function RadioButton(...) {...}
    function MultilinesTextField(...) {...}
    function CancelOrderModal(...) {...} // Explicar melhor, 'Cancel' aqui não é um verbo e, sim, um adjetivo
    function SellerDetails(...) {...}
    function AdminProducts(...) {...}   // Refere-se a uma lista
    function SellerCreation(...) {...}
    function SellerEdition(...) {...}
    function EmailActivation(...) {...}
    function Products(...) {...}

    // Bad 😕
    function AdminProductsList(...) {...}   // Não usar a palavra List
    function CreateSeller(...) {...}        // Não deveria usar verbo
    function EditSeller(...) {...}          // Não deveria usar verbo
    function ListProducts(...) {...}        // 'List' é um verbo aqui
<br>

***

### 1.1.3- Usar nomes específicos, evitando nomes ambíguos no escopo 
Ser específico o suficiente para identificar o que está sendo referenciado de forma unívoca, no escopo, e preferencialmente, no projeto.<br>

Por exemplo, se o escopo é uma função de um componente, e é necessário salvar um *array* de 'Pedidos' (Orders) de um certo 'Vendedor' (Seller), podemos usar uma variável chamada 'orders' para salvar o *array*, mesmo que sejam pedidos de um vendedor específico.<br> Entretanto se o escopo desta variável for o componente e for necessário criar um *state* para salvar o array de 'Pedidos', ainda de um vendedor específico, um nome melhor para este *state* seria sellerOrders, uma vez que apenas 'orders' subentende que o array salva todos os pedidos de todos os vendedores. Se a função for 'clean' e, portanto, pequena, esta ambiguidade não ocorrerá, pois será evidente que 'orders' se refere a pedidos de um vendedor específico. Já em um componente, onde o código é bem mais longo do que em uma função, essa ambiguidade não será percebida com facilidade, deixando o código mais obscuro e, por isso, a necessidade de nomear o 'state' de forma mais específica.

De modo geral, quanto mais amplo o escopo, mais específico deve ser o nome, para impedir conflitos de entendimento. Assim, se estivermos nomeando uma função ou componente 'extern' que pode ser acessado por todo o programa, devemos tornar o nome específico o suficiente para que não possa ser confundido com algo semelhante no resto do sistema.<br>
<br>

***

Nunca usar export default, para obrigar o uso do nome específico na importação.
### 1.1.4- Ser consistente no escopo do projeto
Deve-se procurar usar os mesmos nomes e verbos para os mesmos tipos de conteúdo e/ou ações, dentro do projeto corrente e, se possível, entre todos os projetos da BuildBox.<br>

Por exemplo:<br>

    // Bad 😕 
    getUserInfo()
    getClientData()
    getCustomerRecord()

    // Good 😀
    getClient()

<br>

***

### 1.1.5- Usar aspas simples
Usar aspas simples ('') nos literais de strings e nomes de propriedades, ao invés de aspas duplas ("").<br>

### 1.1.6- Bruno lembrar outro ponto sobre nomenclatura

<br>
 