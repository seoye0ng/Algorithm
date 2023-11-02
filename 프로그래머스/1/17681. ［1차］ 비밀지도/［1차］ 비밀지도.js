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

/* 비트 OR (|) 연산 / padStart / replaceAll

** 비트 OR (|) 연산은 두 이진수를 비트 단위로 비교하여 결과를 생성. 이 연산은 각 비트를 비교하고, 두 비트 중 하나라도 1인 경우 해당 비트를 1로 설정하는 연산

function solution2(n, arr1, arr2) {
    const answer = [];
    
    for (let i = 0; i < n; i++) {
        const combineBinaryArr = (arr1[i] | arr2[i]).toString(2);
        const combineBinaryArrAll = combineBinaryArr.padStart(n, '0');
        const row = combineBinaryArrAll.replaceAll("0", " ").replaceAll("1", "#");
        answer.push(row);
    }
    
    return answer;
}
*/



