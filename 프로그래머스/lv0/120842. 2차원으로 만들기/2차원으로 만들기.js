function solution(num_list, n) {
    var answer = [];
    
    for(let i = 0; i < num_list.length; i += n){
        let nums = num_list.slice(i, i + n)
        answer.push(nums)
    }
    
    return answer;
}