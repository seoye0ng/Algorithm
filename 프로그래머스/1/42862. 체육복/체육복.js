function solution(n, lost, reserve) {
    // 여벌 체육복을 가져온 학생이 도난당한 경우, 둘 다 목록에서 제거
    const newLost = lost.filter(num => !reserve.includes(num)).sort((a, b) => a - b);
    const newReserve = reserve.filter(num => !lost.includes(num));

    let students = (n - lost.length) + (lost.length - newLost.length);
    
    for (let i = 0; i < newLost.length; i++) {
        if (newReserve.includes(newLost[i] - 1)) {
            students += 1;
            newReserve.splice(newReserve.indexOf(newLost[i] - 1), 1);
        } else if (newReserve.includes(newLost[i] + 1)) {
            students += 1;
            newReserve.splice(newReserve.indexOf(newLost[i] + 1), 1);  
        }
    }

    return students;
}