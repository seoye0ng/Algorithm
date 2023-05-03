function solution(sides) {
    let answer = 0;
    let [min, max] = [Math.min(...sides), Math.max(...sides)];
   
    for(let i = max; i > 0; i--)
        if(max < min + i && max >= i){
            answer++;
        }
    
    for(let i = max + 1; i < max + min; i++){
        answer++;
    }
    
    return  answer;
}
