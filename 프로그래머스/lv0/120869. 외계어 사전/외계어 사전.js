function solution(spell, dic) {
   return dic.some(el => spell.every(val => el.includes(val))) ? 1 : 2
}