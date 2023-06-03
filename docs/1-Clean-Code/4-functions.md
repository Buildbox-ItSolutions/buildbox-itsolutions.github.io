# 1.4- Funções e métodos
<br>

***

### 1.4.1- Usar o DRY (**D**on't **R**epeat **Y**ourselt)  <br> 
Código que tem o potencial de ser usados em outros lugares do sistema, ou seja, é genérico, deve ser escrito (encapsulados) dentro de uma função (que poderá, por sua vez, chamar outras funções).<br>

Em outras palavras, não escreva o mesmo código ou código muito parecido em mais de um lugar, no sistema. Se ocorrer a necessidade de fazer isso, encapsule tal código em uma função reusável.<br>

Isto facilita o entendimento desse código por outros desenvolvedores, incluindo você, no futuro, e facilita a manutenção e expansão futuras desse código.<br>
<br>

***

### 1.4.2- As funções devem fazer apenas uma coisa (Single Responsability Principle)<br>

Note que 'fazer apenas uma coisa', aqui, tem um significado especial. Certamente, a maioria das funções que criamos faz mais de uma coisa, e tais funções não teriam razão de existir não fosse esse fato.<br>

Para entendermos o que 'fazer apenas uma coisa' significa, aqui, precisamos explicar um conceito chamado de *nível de abstração*.<br>

Vamos explicar este conceito com uma ilustração concreta.<br>
Imagine que você queira realizar uma tarefa de processar um pagamento, que consista na execução de 100 passos, em sequência.<br>
Como organizaria essa tarefa em JavaScript?<br>
Definiria uma única função, por exemplo **processPayment()**, e executaria os 100 passos dentro dessa função?<br>
Certamente, essa solução não deixaria o código claro, fácil de entender e de manter.<br>
<br>
Uma solução melhor seria:<br>

1. Organizar os 100 passos em 20 grupos de aproximadamente 5 passos, cada.
2. Criar 20 funções adicionais, cada uma para executar os passos dentro de cada um desses 20 grupos. Dizemos, então, que os passos estão no nível 1 de abstração e que as 20 funções que executam cada grupo de passos estão em um nível de abstração superior, que chamamos de nível 2.<br> 
3. Oganizar as 20 funções em 4 novos grupos, com 5 funções do nível 2, em cada um desses 4 grupos.
4. Criar 4 funções para executar as funções de cada um desses 4 grupos. Agora, podemos dizer que essas 4 novas funções estão no nível 3 de abstração. E, por fim, dizemos que o nível de abstração da função principal, **processPayment()**, é o nível 4 de abstração.<br>
<br>

Esta ilustração nos permite, então, explicar que: 'fazer apenas uma coisa' significa fazer apenas uma coisa no nível de abstração descrito pelo nome da função. E, portanto, o título desta seção significa que **uma função deve fazer apenas uma coisa no nível de abstração descrito pelo seu nome**.<br>

Finalmente, podemos, também, estabelecer mais 2 regras que nos ajudam a organizar, de forma clara, o trabalho a ser feito por meio de funções:

1.  O nível de abstração do código, dentro de uma função, deve ser um nível abaixo do nível implícito no nome da função.<br>
2. Deve-se evitar misturar níveis de abstração dentro de funções. Ou seja, qualquer coisa que não se encaixe no nível abaixo do nome, deve ser codificado em outro lugar.<br>
<br>

Vamos mostrar um exemplo em código para ajudar na compreensão de tudo o que foi dito.<br>

Considere a função **renderElement()**, abaixo.<br>

    function renderElement(dataToRender) {
        const element = dataToRender.element
        if (element === 'script' || element === 'SCRIPT') {
            throw new Error('Invalid element.')
        }

        let partialOpeningTag = '<' + element

        const attributes = dataToRender.attributes

        for (const attribute of attributes) {
            partialOpeningTag = 
                partialOpeningTag + ' ' +
                attribute.name + '="' +
                attribute.value + '"';
        }

        const openingTag = partialOpeningTag + '>'

        const closingTag = '</' + element + '>'
        const content = dataToRender.content

        const template = openingTag + content + closingTag

        const rootElement = dataToRender.root

        rootElement.innerHTML = template
    }
<br>

Embora o código acima não seja difícil de ler, veja, abaixo, o que acontece quando refactoramos esse código, utilizando os conceitos desta seção:<br>

    function renderElement(dataToRender) {
        const element = dataToRender.element
        validateElementType(element)

        dataToRender.root.innerHTML = 
            buildOpenningTag(
                element, buildAttributesList(dataToRender.attributes) ) + 
            dataToRender.content + 
            buildClosingTag(element)
    }

    function validateElementType(element) {
        if (element === 'script' || element === 'SCRIPT') {
            throw new Error('Invalid element.')
        }
    }

    function buildAttributesList(attributes) {
        let attributeList = ''
        for (const attribute of attributes) {
            attributeList = `${attributeList} ${attribute.name}="${attribute.value}"`
        }
        return attributeList;
    }

    function buildOpenningTag(element, attributes) {
        return( '<' + element + attributes + '>' )
    }

    function buildClosingTag(element) {
        return( tag = '</' + element + '>' )
    }
<br>
Observe como o comportamento da função **renderElement()**, agora, ficou explícito, fácil de ler e como seu código foi refatorado em 4 funções perfeitamente claras e reusáveis em outras partes do sistema.

Note os níveis de abstração de que falamos anteriormente, no nível 1, temos o conteúdo das funções **buildAttributesList()**, **buildOpenningTag()** e **buildClosingTag()**, no nível 2 temos essas três funções e no nível 3, temos a função **renderElement()**.

Por fim, observe que a atribuição direta da propriedade **dataToRender.root.innerHTML** não atende a regra 2, acima, porque essa atribuição é uma ação que manipula direto o conteúdo do DOM e está mais para algo do nível 1 do que do nível 2.<br>
Nesse caso, entretanto, abrimos uma exceção porque, para resolver isso, teríamos de criar uma função que receberia o elemento **root** e o conteúdo, como parâmetros, para, depois, apenas fazer a atribuição da propriedade **innerHTML**. Ou seja, neste caso, o atendimento da regra 2 acabaria deixando o código poluído e menos claro e, portanto, não vale a pena seguir a regra 2.<br>
<br>

***

### 1.4.3- Limitar o número de argumentos das funções<br>
- **Quanto menos argumentos, melhor**<br>
A partir de 2 argumentos torna-se necessário mapear cada parâmetro, na chamada da função, a cada argumento da declaração da função. Isto é uma informação implícita que demanda tempo do desenvolvedor. Além disso, o aumento do número de parâmetros aumenta exponencialmente o número de casos de teste para se testar uma função.<br>
<br>

- **Usar objetos ou arrays para agrupar múltiplos parâmetros em um único**<br>
Caso não seja possível manter apenas 1 ou 2 argumentos, deve-se usar, na chamada da função, um objeto com os mesmos nomes dos argumentos, de modo a tornar explícito o que significa cada parâmetro passado, como no exemplo abaixo.

<br>

    // Bad 😕 
    function compare(first, second, comparator) {
        if (comparator === 'equal')         return first === second
        if (comparator === 'not equal')     return first !== second
        if (comparator === 'greater')       return first > second
        if (comparator === 'smaller')       return first < second
    }

    const isSmaller = compare(3, 5, 'smaller')
    const isEqual = compare(3, 5, 'equal')


    // Good 😀
    function compare(comparisonData) {
        const { first, second, comparator } = comparisonData
        if (comparator === 'equal')         return first === second
        if (comparator === 'not equal')     return first !== second
        if (comparator === 'greater')       return first > second
        if (comparator === 'smaller')       return first < second
    }

    const isSmaller = compare({ first: 3, second: 5, comparator: 'smaller' })
<br>

- **Não usar argumentos como flags**<br>
Flags indicam que a função faz mais de uma coisa e, nesse caso, a função deveria ser dividida em 2 ou mais funções.

<br>

    // Bad 😕 
    function createFile(name, temp) {
        if (temp) {
            fs.create(`./temp/${name}`)
        } else {
            fs.create(name)
        }
    }


    // Good 😀
    function createFile(name) {  fs.create(name)  }
    function createTempFile(name) {  createFile(`./temp/${name}`)  }

<br>


***

### 1.4.4- Usar parâmetros default<br>
- Usar argumentos default, quando possível, reduz o número de testes condicionais dentro da função.<br>
<br>

***

### 1.4.5- Evitar efeitos colaterais das funções<br>

Uma função produz um efeito colateral quando ela envia ou escreve informações em qualquer coisa além de receber parâmetros e retornar valores. Um efeito colateral pode ser, por exemplo, escrever em um arquivo, modificar uma variável global ou modificar um argumento mutável passado como parâmetro, como por exemplo um array ou objeto.

Acessar recursos externos é necessário, como por exemplo acessar um banco de dados. Nestes casos, o que deve ser feito é centralizar onde isso é feito em um conjunto de funções, componente ou serviço designados para tal fim. O acesso ao recurso não deve ser feito de qualquer lugar, sem critério, e deve sempre passar pelos métodos ou funções do Componente ou Serviço designado para isso.

No caso de parâmetros mutáveis, passados como argumentos para uma função, caso seja necessário transformar esse conteúdo passado como parâmetro, o que deve ser feito é criar uma cópia profunda do objeto em questão, transformar tal objeto e retornar a cópia modificada como resultado da função.<br> O resultado de uma função nunca deve ser 'retornado' no objeto passado como parâmetro.<br>
<br>
