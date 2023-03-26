function solution(i, j, k) {
    var answer = 0;
    
    for(let x = i; x <= j; x++){
        let a = String(x).split('');
        for(let z = 0; z < a.length; z++){
            if(a[z] == k){
                answer += 1;
            }
        }
    }
    
    return answer;
}