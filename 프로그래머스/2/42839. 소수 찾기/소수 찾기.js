function solution(numbers) {
    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // 가능한 모든 순열을 구하는 함수
    function getAllPermutations(arr) {
        const result = [];

        // 재귀 함수를 이용하여 순열을 구함
        function generate(prefix, rest) {
            if (prefix.length > 0) {
                const num = parseInt(prefix.join(''), 10);
                result.push(num);
            }
            for (let i = 0; i < rest.length; i++) {
                generate(prefix.concat(rest[i]), rest.slice(0, i).concat(rest.slice(i + 1)));
            }
        }

        generate([], arr);
        return result;
    }

    // 문자열을 배열로 변환하고 정렬
    const arr = numbers.split('').sort();

    // 가능한 모든 순열 구하기
    const permutations = getAllPermutations(arr);

    // 중복을 제거한 순열을 저장할 Set
    const uniquePermutations = new Set(permutations);

    // 소수 개수 카운트
    let primeCount = 0;

    // 순열을 순회하면서 소수인지 확인
    uniquePermutations.forEach(num => {
        if (isPrime(num)) primeCount++;
    });

    return primeCount;
}
