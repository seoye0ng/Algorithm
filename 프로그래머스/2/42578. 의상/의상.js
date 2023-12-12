function solution(clothes) {
    let answer = 1;
    const clothesObj = new Map();
    
    clothes.forEach(([name, category]) => {
        if (clothesObj.has(category)) {
            clothesObj.set(category, clothesObj.get(category) + 1);
        } else {
            clothesObj.set(category, 1);
        }
    });
    
     for (let quantity of clothesObj.values()) {
        answer *= quantity + 1;
    }

    return answer - 1; 
}