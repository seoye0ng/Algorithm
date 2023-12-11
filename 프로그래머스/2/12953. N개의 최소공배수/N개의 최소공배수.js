function solution(arr) {
    let stack = 0;
    
    for(let i = 0; i < arr.length; i++) {
        if(stack === 0) stack = lcm(arr[i], arr[i + 1]);
        else {
            stack = lcm(stack, arr[i])
        }
    }
    
    return stack;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function gcd(a, b) {
    let r;
    while (b !== 0) {
        r = a % b;
        a = b;
        b = r;
    }
    
    return a
}