# Padrões de Código<br>
<br>

***

## Objetivo deste Guia<br>
Este guia apresenta as regras e padrões de codificação a serem seguidos pelas equipes da [**BuildBox**](https://buildbox.com.br/), que desenvolvem software usando as seguintes tecnologias:<br>

* React.js
* React-Native
* TypeScript
* JavaScript
* Node.js
* Nest.js

Estes padrões têm dois objetivos principais:

* Facilitar o desenvolvimento inicial e manutenção de código, reduzindo o tempo e custos
* Garantir o uso de boas práticas de forma a melhorar a qualidade

Os padrões estão organizados em 2 grandes seções, **Clean Code** e **Design Patterns**, conforme apresentado no índice, abaixo.<br>

A seção **Clean Code** trata de padrões que tornam o código mais legível, autoexplicativo e, assim, fácil de entender e de manter.<br>

Na seção **Design Patterns** são apresentados os principais padrões de código usados na **BuildBox** (equipe JS) que representam decisões de arquitetura que visam aumentar, além da clareza do código, também a reusabilidade e facilidade de evolução dos sistemas.

<br>

***

<br>
<br>

## Índice de Conteúdo<br>

***

* [1- Clean Code (Legibilidade)](1-Clean-Code/1-nomenclature.md)
    * [1.1- Nomenclatura](1-Clean-Code/1-nomenclature.md)
        * [1.1.1- Usar as seguintes notações de caixa](1-Clean-Code/1-nomenclature.md)
        * [1.1.2- Usar nomes descritivos e com significado](1-Clean-Code/1-nomenclature.md)
            * [Variáveis, propriedades e argumentos de funções](1-Clean-Code/1-nomenclature.md)
            * [Funções e métodos](1-Clean-Code/1-nomenclature.md)
            * [Componentes](1-Clean-Code/1-nomenclature.md)

        * [1.1.3- Usar nomes específicos, evitando nomes ambíguos no escopo](1-Clean-Code/1-nomenclature.md)
        * [1.1.4- Ser consistente no escopo do projeto](1-Clean-Code/1-nomenclature.md)
        * [1.1.5- Usar aspas simples](1-Clean-Code/1-nomenclature.md)

    * [1.2- Formatação do código](1-Clean-Code/2-code-format.md)
        * [1.2.1- Evitar comentários](1-Clean-Code/2-code-format.md)
        * [1.2.2- Formatação horizontal](1-Clean-Code/2-code-format.md)
        * [1.2.3- Formatação vertical](1-Clean-Code/2-code-format.md)

    * [1.3- Controle do fluxo](1-Clean-Code/3-flow-control.md)
        * [1.3.1- Preferir cláusulas condicionais afirmativas, ao invés de negativas](1-Clean-Code/3-flow-control.md)
        * [1.3.2- Usar o mínimo aninhamento possível](1-Clean-Code/3-flow-control.md)
            * [Usar cláusulas condicionais de 'Proteção'](1-Clean-Code/3-flow-control.md)
            * [Refatorar estruturas de controle em funções separadas](1-Clean-Code/3-flow-control.md)

        * [1.3.3- Substituir declarações switch/if por literais de objetos](1-Clean-Code/3-flow-control.md)
        * [1.3.4- Usar Exceptions para tratar erros ](1-Clean-Code/3-flow-control.md)

    * [1.4- Funções e métodos](1-Clean-Code/4-functions.md)
        * [1.4.1- DRY (**D**on't **R**epeat **Y**ourselt)](1-Clean-Code/4-functions.md)
        * [1.4.2- As funções devem fazer apenas uma coisa (Single Responsability Principle)](1-Clean-Code/4-functions.md)
        * [1.4.3- Limitar o número de argumentos das funções](1-Clean-Code/4-functions.md)
        * [1.4.4- Usar parâmetros default](1-Clean-Code/4-functions.md)
        * [1.4.5- Evitar efeitos colaterais das funções](1-Clean-Code/4-functions.md)

    * [1.5- Configuração VSCode](1-Clean-Code/5-vscode-config.md)
<br>
<br>


***

* [2- Design Patterns (Padrões de Design)](2-Design-Patterns/design-patterns.md)
    * [2.1- Programa - Estrutura de pastas do projeto]()
    * [2.2- Programa - Configuração de estilos]()
    * [2.3- Programa - Roteamento de páginas]()
    * [2.4- Programa - Menu(s) de navegação]()
    * [2.5- Programa - Tratamento de erros]()
    * [2.6- Programa - Processamento Assíncrono]()
    * [2.7- Programa - Acesso a APIs]()
    * [2.8- Programa - Persistência no Client]()
    * [2.9- Programa - Autenticação]()
    * [2.10- Componentes - Coesão e Reuso]()
    * [2.11- Componentes - Princípios SOLID]()
    * [2.12- Componentes - Controller/View]()
    * [2.13- Componentes - Formulários]()
    * [2.14- Hooks - React-Query]()
<br>
<br>
<br>
***

## Histórico de Revisões<br>
<br>

| Versão    | Data         | Descrição                                                |
| :-------: | :----------: | :------------------------------------------------------- |
| 01-D02    | 06-Jun-2023  | Atualização do Índice                                    |
| 01-D01    | 05-Jun-2023  | Rascunho para primeira revisão técnica                   |
| -         | -            | -                                                        |

