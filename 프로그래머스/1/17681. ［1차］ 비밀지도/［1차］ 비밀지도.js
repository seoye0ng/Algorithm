function solution(n, arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        let binaryArr1 = arr1[i].toString(2);
        let binaryArr2 = arr2[i].toString(2);
        
        if (binaryArr1.length < n) binaryArr1 = '0'.repeat(n - binaryArr1.length) + binaryArr1;
        if (binaryArr2.length < n) binaryArr2 = '0'.repeat(n - binaryArr2.length) + binaryArr2;
        
        let row = '';
        for (let j = 0; j < n; j++) {
            if (binaryArr1[j] === '1' || binaryArr2[j] === '1') row += '#';
            else row += ' ';
        }
        
        answer.push(row);
    }
    
    return answer;
}





