function solution(X, Y) {
    const setX = [...new Set(X.split(''))];
    const setY = [...new Set(Y.split(''))];
    const duplicateNum = setX.filter(num => setY.includes(num))
    let answer = ''
    
    if (duplicateNum.length === 0) {
        answer = '-1'
    } else if (duplicateNum.length === 1 && duplicateNum[0] === '0') {
        answer = '0'
    } else {
        const resultX = {}
        const resultY = {}
        let matchStr = ''
    
        for(let i in duplicateNum) {
            X.split('').forEach(num => {
                if (duplicateNum[i] === num) resultX[num] = (resultX[num] || 0) + 1; 
                // 프로퍼티가 존재하지 않으면 0으로 초기화한 후 1을 더하기
                }
            ) 
            Y.split('').forEach(num => {
                if (duplicateNum[i] === num) resultY[num] = (resultY[num] || 0) + 1;
                }
            )  
        }
    
        Object.entries(resultX).forEach(([key, value]) => {
            if(resultY[key] === value) matchStr += key.repeat(value)
            else if(resultY[key] >= value) matchStr += key.repeat(value)
            else if(resultY[key] < value) matchStr += key.repeat(resultY[key])
        })
        answer = matchStr.split('').sort((a,b) => b - a).join('')
    }
    return answer;
}