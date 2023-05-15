function solution(spell, dic) {
    var answer = 0;
    
    return dic.some(el => spell.every(v => el.includes(v))) ? 1 : 2
}