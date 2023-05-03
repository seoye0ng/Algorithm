function solution(sides) {
    let answer = 0;
    let side1 = Math.max(...sides);
    let side2 = Math.min(...sides);
    
    //  가장 긴 변이 이미 포함된 경우
    for(let i = side1; i > 0; i--)
        if(side1 < side2 + i && side1 >= i){
            answer++;
        }
    
    //  가장 긴 변인 경우
    for(let i = side1 + 1; i < side1 + side2; i++){
        answer++;
    }
    
    return  answer;
}