function solution(nums) {
    const select = nums.length / 2;
    const numType = [...new Set(nums)].length
    
    return numType >= select ? select : numType;
}