function solution(X, Y) {
    const setX = [...new Set(X.split(''))];
    const setY = [...new Set(Y.split(''))];
    const duplicateNum = setX.filter(num => setY.includes(num))
    
    if (duplicateNum.length === 0) return '-1'
    else if (duplicateNum.length === 1 && duplicateNum[0] === '0') return '0'
    else {
        const resultX = {}
        let matchStr = ''
    
        for(let i in duplicateNum) {
            X.split('').forEach(num => {
                if (duplicateNum[i] === num) resultX[num] = (resultX[num] || 0) + 1; 
                }
            ) 
        }
    
        Object.entries(resultX).forEach(([key, value]) => {
            const matchLength = Y.split('').filter(num => num === key).length;

            if(matchLength <= value) matchStr += key.repeat(matchLength)
            else  matchStr += key.repeat(value)
        })
        
        return matchStr.split('').sort((a,b) => b - a).join('')
    }
}