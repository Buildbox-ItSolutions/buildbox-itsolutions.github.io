# 1.3- Controle do fluxo
<br>

***

### 1.3.1- Preferir cláusulas condicionais afirmativas, ao invés de negativas

Exemplo:<br>

    // Bad 😕 
    function isUserNotActive(node) {
    // ...
    }

    if (!isUserNotActive(node)) {
    // ...
    }

    // Good 😀
    function isUserActive(node) {
    // ...
    }

    if ( isUserActive(node) ) {
    // ...
    }

<br>

***

### 1.3.2- Usar o mínimo aninhamento possível
<br>

#### Usar cláusulas condicionais de 'Proteção'<br>
Uma cláusula condicional de proteção é uma declaração 'if' que faz a função retornar, imediatamente, através de um 'return' ou de uma exceção (Error).

Exemplo:<br>

    // Bad 😕
    function getPromotionalPrice(promotionCode) {
        let price
        if (promotionCode===PROMOTION_CODE1) {
            price = getPromotionCode1Price()
        } else {
            if (promotionCode===PROMOTION_CODE2) {
                price = getPromotionCode2Price()
            } else {
                if (promotionCode===PROMOTION_STUDENT) {
                    price = getPromotionStudentPrice()
                } else {
                    price = getDefaultPrice()
                }
            }
        }
        return price
    }

    // Better 😀
    function getPromotionalPrice(promotionCode) {
        if (promotionCode===PROMOTION_CODE1)      return getPromotionCode1Price()
        if (promotionCode===PROMOTION_CODE2)      return getPromotionCode2Price()
        if (promotionCode===PROMOTION_STUDENT)    return getPromotionStudentPrice()
        return getDefaultPrice()
    }
<br>

#### Refatorar estruturas de controle em funções separadas<br>

Observe o código abaixo:<br>

    // Bad 😕

    function calculatePayment(age, isStudent, isMember) {
        let payment = 0
        if (age < 18) {
            if (isStudent) {
                if (isMember) {
                    if (age < 12) {
                        payment = 5
                    } else {
                        payment = 10
                    }
                } else {
                    payment = 20
                }
            } else {
                if (isMember) {
                    if (age < 12) {
                        payment = 7
                    } else {
                        payment = 15
                    }
                } else {
                    payment = 25
                }
            }
        } else {
            if (isMember) {
                if (age >= 18 && age < 65) {
                    if (isStudent) {
                        payment = 3
                    } else {
                        payment = 8
                    }
                } else {
                    payment = 10
                }
            } else {
                if (age >= 18 && age < 65) {
                    if (isStudent) {
                        payment = 5
                    } else {
                        payment = 15
                    }
                } else {
                    payment = 20
                }
            }
        }
        
        return payment
    }
<br>

Além de ser uma função muito longa (50 linhas), chega a ter até 5 níveis de aninhamento, o que a torna difícil de ler e compreender.<br>

Note como a versão desse código, abaixo, onde várias estruturas de controle foram refatoradas em funções, se torna bem mais fácil de entender.<br>

    // Much better! 😀

    function calculatePayment(age, isStudent, isMember) {
        if( isUnderage(age) )
            return calculateUnderagePayment(isStudent, isMember, age)
        
        if (isAdult(age))
            return calculateAdultPayment(isStudent, isMember, age)
        
        return calculateSeniorPayment()
    }

    function isUnderage(age) {
        return age < 18
    }

    function isAdult(age) {
        return age >= 18 && age < 65
    }

    function calculateUnderagePayment(isStudent, isMember, age) {
        if (isStudent) {
            return calculateUnderageStudentPayment(isMember, age)
        } else {
            return calculateUnderageNonStudentPayment(isMember, age)
        }
    }

    function calculateUnderageStudentPayment(isMember, age) {
        if (isMember) {
            return age < 12 ? 5 : 10
        } else {
            return 20
        }
    }

    function calculateUnderageNonStudentPayment(isMember, age) {
        if (isMember) {
            return age < 12 ? 7 : 15
        } else {
            return 25
        }
    }

    function calculateAdultPayment(isStudent, isMember, age) {
        if (isMember) {
            return calculateAdultMemberPayment(isStudent, age)
        } else {
            return calculateAdultNonMemberPayment(isStudent, age)
        }
    }

    function calculateAdultMemberPayment(isStudent, age) {
        return isStudent ? 3 : 8
    }

    function calculateAdultNonMemberPayment(isStudent, age) {
        return isStudent ? 5 : 15
    }

    function calculateSeniorPayment() {
        return 20
    }

Embora o código final ainda tenha 51 linhas, fica fácil de entender o que cada função faz, porque cada grupo de condicionais foi encapsulado em uma função pequena e com um apenas 1 nível de aninhamento.<br>


***

### 1.3.3- Substituir declarações switch/if por literais de objetos<br>

    // Bad 😕
    const getServerUrl = (env) => {
        switch (env) {
            case "prod":
                return "prod.myweb.com"
            case "test":
                return "test.myweb.com"
            case "staging":
                return "staging.myweb.com"
            default:
                return "https://localhost:3000"
        }
    }

    // Better 😀
    const serverUrls = {
        prod: "prod.myweb.com",
        test: "test.myweb.com",
        staging: "staging.myweb.com"
    }

    const getServerUrl = (env) => serverUrls[env] || "https://localhost:3000"
<br>

***

### 1.3.4- Usar Exceptions para tratar erros 
Todos os tipos de erro que impeçam o fluxo do programa de continuar ou de produzir resultados corretos, devem ser previstos e tratados por meio de exceções (**try  catch**).<br>

A idéia básica é validar todas as variáveis que serão utilizadas em determinado processamento e subir uma exceção, caso alguma delas tenha um valor inválido, antes da execução do processamento em questão.

A seção [Design Patterns / Tratamento de erros]() detalha a forma padrão como isso deve ser feito no código da BuildBox.<br>
<br>

