function solution(str1, str2) {
    let intersection = 0;
    let union = 0;
    const str1Map = splitStr(str1);
    const str2Map = splitStr(str2);
    
    if (str1Map.size === 0 && str2Map.size === 0) return 65536;
    
    str1Map.forEach((value, key) => {
        if (str2Map.has(key)) {
            intersection += Math.min(value, str2Map.get(key));
            union += Math.max(value, str2Map.get(key));
        } else {
            union += value;
        }
    });
  
    str2Map.forEach((value, key) => {
        if (!str1Map.has(key)) union += value;
    });
    
    return Math.floor((intersection / union) * 65536);
}

function splitStr(str) {
    const regex = /^[a-zA-Z]+$/;
    const map = new Map();

    for(let i = 0; i < str.length - 1; i++){
        if(regex.test(str[i]) && regex.test(str[i + 1])) {
            const string = str[i].toUpperCase() + str[i + 1].toUpperCase();  
            
            if (map.has(string)) map.set(string, map.get(string) + 1);
            else map.set(string, 1);
        }
    }
    return map;
}