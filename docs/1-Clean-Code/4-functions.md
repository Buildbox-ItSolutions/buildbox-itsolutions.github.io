# 1.4- Funções e métodos

### Usar o DRY (**D**on't **R**epeat **Y**ourselt)  <br> 
- Código repetido deve ser codificado em uma ou várias funções.<br>

### Preferir a programação funcional<br>
- Ou seja, evitar trabalhar com parâmetros de listas ou objetos, copiando-os sempre antes de manipulá-los.<br>

### Limitar o número de argumentos<br>
- Quanto menos, melhor.<br>
- Usar objetos ou arrays para agrupar múltiplos parâmetros em um único.<br>
- Não usar argumentos como flags.<br>

### Usar argumentos default<br>
- Usar argumentos default reduz o número de condicionais dentro da função.<br>

### As funções devem ser pequenas e fazer apenas uma coisa (Single Responsability Principle)<br>
- O nível de abstração dentro da função deve ser um nível abaixo do nível implícito no nome da função.<br>
- Evitar misturar níveis de abstração dentro de funções. Qualquer coisa a mais deve ser codificada dentro de outra função que será chamada pela primeira.<br>
- Porém, evitar refatoramento redundante.<br>
