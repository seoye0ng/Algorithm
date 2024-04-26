function solution(topping) {
    // 형의 케이크, 토핑의 갯수를 세야한다.
    const cakeA = {}
    // 동생의 케이크, 토핑의 종류만 기록하면 된다.
    const cakeB = new Set()


    let answer = 0;
    // 형의 케이크에 올라간 토핑 종류
    let typeOfToppings = 0

    for (let i = 0; i < topping.length; i++) {        
        if (cakeA[topping[i]]) {
            cakeA[topping[i]]++
        } else {
            cakeA[topping[i]] = 1
            typeOfToppings++            
        }
    }


    // 케이크를 자르는 지점(index)를 정한다.
    // index에서 케이크를 자른 경우 토핑의 종류가 동등한지 비교한다.
    for (let i = 0; i < topping.length; i++) {
        cakeB.add(topping[i])
        cakeA[topping[i]]--

        if (!cakeA[topping[i]]) {
            typeOfToppings--
        }
        if (cakeB.size === typeOfToppings) {
            answer++
        }
    }


    return answer;
}
