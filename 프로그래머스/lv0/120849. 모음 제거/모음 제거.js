function solution(my_string) {
    const a = ['a','e','i','o','u']
    
    return [...my_string].filter((b) => !a.includes(b)).join('');
}