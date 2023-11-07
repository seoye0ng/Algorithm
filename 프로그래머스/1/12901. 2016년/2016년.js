function solution(a, b) {
    const daysOfWeek = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    const month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let days = b;
    
    for(let i = 0; i < a - 1; i++){
        days += month[i];
    } 
    
    const day = (days % daysOfWeek.length) === 0 ? 6 : days % daysOfWeek.length - 1
    
    return daysOfWeek[day];
}