function solution(new_id) {
    let answer = new_id.toLowerCase().replace(/[^a-z0-9.\-_]/g, '').split('');
    
    for(let i = 0; i < answer.length; i++){
        if(i === 0 && answer[i] === '.') {
            answer.shift()
            i -= 1
        } else {
            if(answer[i] === '.' && answer[i + 1] === '.'){
                answer.splice(i, 1)
                i -= 1;
            }
        }
        
    }
    if(answer.length > 15){
        answer.splice(15, answer.length - 15)
    }
    else if(answer.length === 0){
        answer = ['a', 'a', 'a']
    }
    if(answer[answer.length - 1] === '.'){
         answer.pop()
    }
    if(answer.length < 3 && answer.length >= 1){
         while(answer.length < 3 && answer.length >= 1){
             answer.push(answer[answer.length - 1])
         }
    }
    
    
    
    return answer.join('');
}