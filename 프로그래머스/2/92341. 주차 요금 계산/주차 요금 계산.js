function solution(fees, records) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    const carInfo = new Map();
    const parkingTime = new Map();
    
    records.forEach(record => {
        const [time, carNum, status] = record.split(' ');
        const [hour, minute] = time.split(':').map(Number);
        const totalMinute = hour * 60 + minute;
        
        if (status === 'IN') {
            parkingTime.set(carNum, totalMinute);
        } else {
            const startTime = parkingTime.get(carNum);
            const duration = totalMinute - startTime;
            const currentParkingTime = carInfo.has(carNum) ? carInfo.get(carNum) : 0;
            const totalParkingTime = currentParkingTime + duration;
            carInfo.set(carNum, totalParkingTime);
            parkingTime.delete(carNum);
        }
    });
    
    for (const [carNum, startTime] of parkingTime) {
        const endTime = 23 * 60 + 59;
        const duration = endTime - startTime;
        const currentParkingTime = carInfo.has(carNum) ? carInfo.get(carNum) : 0;
        const totalParkingTime = currentParkingTime + duration;
        carInfo.set(carNum, totalParkingTime);
    }
    
    const result = [];
    for (const [carNum, parkingTime] of [...carInfo.entries()].sort((a, b) => a[0] - b[0])) {
        const fee = calculateFee(parkingTime, fees);
        result.push(fee);
    }
    
    return result;
}

function calculateFee(parkingTime, fees) {
    const [baseTime, baseFee, unitTime, unitFee] = fees;
    if (parkingTime <= baseTime) {
        return baseFee;
    } else {
        const remainder = parkingTime - baseTime;
        return baseFee + Math.ceil(remainder / unitTime) * unitFee;
    }
}
