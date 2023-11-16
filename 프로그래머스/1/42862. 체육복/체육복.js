function solution(n, lost, reserve) {
    // 여벌 체육복을 가져온 학생이 도난당한 경우, 둘 다 목록에서 제거
    const newLost = lost.filter(num => !reserve.includes(num)).sort((a, b) => a - b);
    const newReserve = reserve.filter(num => !lost.includes(num));

    let students = (n - lost.length) + (lost.length - newLost.length);
    
    newLost.forEach(lostNum => {
        if (newReserve.includes(lostNum - 1)) {
            students += 1;
            newReserve.splice(newReserve.indexOf(lostNum - 1), 1);
        } else if (newReserve.includes(lostNum + 1)) {
            students += 1;
            newReserve.splice(newReserve.indexOf(lostNum + 1), 1);  
        }
    })
    
    return students;
}