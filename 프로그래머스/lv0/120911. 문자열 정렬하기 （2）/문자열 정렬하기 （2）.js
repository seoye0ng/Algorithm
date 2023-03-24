function solution(my_string) {
    let ascii = [];
    let answer='';
    
     for(let i = 0; i < my_string.length; i++){
        if(my_string.charCodeAt(i) < 91) {
           ascii.push(my_string.charCodeAt(i) + 32)
        } else {
            ascii.push(my_string.charCodeAt(i))
        }
    }
   
    ascii = ascii.sort((a,b) => a - b)
  
    for(let i of ascii) {
        answer += String.fromCharCode(i)
    }
    
    return answer;
}