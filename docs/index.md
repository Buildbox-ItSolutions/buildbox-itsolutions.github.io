# Padrões de Código<br>
<br>

***

## Objetivo deste Guia<br>
Este guia apresenta as regras e padrões de codificação a serem seguidos pelas equipes BuildBox,<br>
que desenvolvem software usando as seguintes tecnologias:

* React.js
* React-Native
* TypeScript
* JavaScript
* Node.js
* Nest.js

Estes padrões têm dois objetivos principais:

* Facilitar o desenvolvimento inicial e manutenção de código, reduzindo o tempo e custos
* Garantir o uso de boas práticas de forma a melhorar a qualidade

Os padrões estão organizados em 2 áreas **Clean Code** e **Design Patterns**, conforme o índice abaixo.<br>
<br>

***

## Índice de Conteúdo<br>
* [1- Clean Code (Legibilidade)](1-Clean-Code/1-nomenclature.md) - Tornam o código autoexplicativo e fácil de entender
    * [1.1- Nomenclatura](1-Clean-Code/1-nomenclature.md)
        * [1.1.1- Usar as seguintes notações de caixa](1-Clean-Code/1-nomenclature.md/111)
        * [1.1.2- Usar nomes descritivos e com significado]()
            * [Variáveis, propriedades e argumentos de funções]()
            * [Funções e métodos]()
            * [Componentes]()

        * [1.1.3- Usar nomes específicos, evitando nomes ambíguos no escopo]()
        * [1.1.4- Ser consistente no escopo do projeto]()
        * [1.1.5- Usar aspas simples]()

    * [1.2- Formatação do código]()
        * [1.2.1- Evitar comentários]()
        * [1.2.2- Formatação horizontal]()
        * [1.2.3- Formatação vertical]()

    * [1.3- Controle do fluxo]()
        * [1.3.1- Preferir cláusulas condicionais afirmativas, ao invés de negativas]()
        * [1.3.2- Usar o mínimo aninhamento possível]()
            * [Usar cláusulas condicionais de 'Proteção']()
            * [Refatorar estruturas de controle em funções separadas]()

        * [1.3.3- Substituir declarações switch/if por literais de objetos]()
        * [1.3.4- Usar Exceptions para tratar erros ]()

    * [1.4- Funções e métodos]()
        * [1.4.1- DRY (**D**on't **R**epeat **Y**ourselt)]()
        * [1.4.2- As funções devem fazer apenas uma coisa (Single Responsability Principle)]()
        * [1.4.3- Limitar o número de argumentos das funções]()
        * [1.4.4- Usar parâmetros default]()
        * [1.4.5- Evitar efeitos colaterais das funções]()

    * [1.5- Configuração VSCode]()
<br>
<br>

* [2- Design Patterns (Padrões de Design)](2-Design-Patterns/design-patterns.md) - Além de tornarem o código mais fácil de entender, possibilitam a atualização e evolução do código
    * [2.1- Programa - Estrutura de pastas do projeto]()
    * [2.2- Programa - Configuração de estilos]()
    * [2.3- Programa - Roteamento de páginas]()
    * [2.4- Programa - Menu(s) de navegação]()
    * [2.5- Programa - Tratamento de erros]()
    * [2.6- Programa - Autenticação]()
    * [2.7- Acesso a APIs]()
    * [2.8- Componentes - Coesão e Reuso]()
    * [2.9- Componentes - Princípios SOLID]()
    * [2.10- Componentes - Controller/View]()
    * [2.11- Componentes - Formulários]()
    * [2.12- Hooks - React-Query]()
