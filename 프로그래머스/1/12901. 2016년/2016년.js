function solution(a, b) {
    const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    
    const date = new Date;
    date.setFullYear(2016);
    date.setMonth(a - 1);
    date.setDate(b);
    
    
    return daysOfWeek[date.getDay()];
}