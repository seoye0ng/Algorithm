function solution(phone_number) {
    let str = ''
    const num = phone_number.slice(-4)
    
    for(let i = 0; i < phone_number.length - 4; i++) {
        str += '*'
    }
    
    return str + num;
}