function solution(number, limit, power) {
    const powersArr = [1];
    Array.from({length:number - 1}, (v,i) => i + 2).forEach(num => {
        let divisor = 2;
        for(let i = 2; i <= num / 2; i++) {
            if(num % i === 0) divisor += 1;
        }
        powersArr.push(divisor)
    })
    const answer = powersArr.reduce((totalPower, currentPower) => {
        if(currentPower > limit) return totalPower + power
        return totalPower + currentPower
    });
    
    return answer
}