function solution(numbers) {
    const str = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    
     str.forEach((str, idx) => {
        numbers = numbers.replaceAll(str, idx);
    })

    return parseInt(numbers);
}