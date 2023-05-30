function solution(A, B) {
    if(A === B) {
        return 0
    }else {
        for(let i = 0; i < A.length; i++){
           const shifted = A.slice(-i) + A.slice(0, -i); 
            // A를 오른쪽으로 i칸 밀어낸 문자열
           if (shifted === B) {
      // A를 밀어서 B와 일치하는 경우
            return i;
            } 
        } return -1
     }
}