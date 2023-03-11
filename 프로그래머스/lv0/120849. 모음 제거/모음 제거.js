function solution(my_string) {
    const a = ['a','e','i','o','u']
    const arr = [...my_string]
    
    return arr.filter((b) => !a.includes(b)).join('');
}