function solution(nums) {
    const addNums = [];

    // 서로 다른 세 수의 합을 구하여 addNums 배열에 저장
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                addNums.push(nums[i] + nums[j] + nums[k]);
            }
        }
    }

    // 소수 여부 판별 및 소수인 경우 카운트
    let count = 0;
    for (let i = 0; i < addNums.length; i++) {
        if (isPrime(addNums[i])) {
            count++;
        }
    }

    return count;
}

// 소수 판별 함수
function isPrime(num) {
    if (num <= 2 || num % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

