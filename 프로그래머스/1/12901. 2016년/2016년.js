function solution(a, b) {
    const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT'];

    const date = new Date(2016, a - 1, b)
    
    return daysOfWeek[date.getDay()];
}