function solution(s) {
    let answer = s
    const nums = {0:'zero', 1:'one', 2:'two', 3:'three', 4:'four', 5:'five', 6:'six', 7:'seven', 8:'eight', 9:'nine'}
    
    const entries = Object.entries(nums);
    entries.forEach(([key,value]) => {
        answer = answer.replaceAll(value, key)
    });
    
    return parseInt(answer);
}