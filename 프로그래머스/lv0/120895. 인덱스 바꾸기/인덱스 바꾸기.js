function solution(my_string, num1, num2) {
    let strArr = [...my_string]
    
    strArr.splice(num1, 1, my_string[num2])
    strArr.splice(num2, 1, my_string[num1])
    
    return strArr.join('');
}