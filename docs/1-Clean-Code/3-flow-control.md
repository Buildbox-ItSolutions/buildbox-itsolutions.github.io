# 1.3- Controle do fluxo
<br>

***

### 1.3.1- Preferir condicionais positivos

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

#### Usar testes de 'Proteção'<br>
Um teste de proteção é uma declaração 'if' que faz a função retornar, imediatamente, através de um 'return' ou via exceção.

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

#### Refactorar estruturas de controle em funções separadas<br>

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

### 1.3.3- Usar try e catch em lugar de 'if' 
- Quando aplicável, usar tratamento de erros (try catch) em lugar de 'ifs'
