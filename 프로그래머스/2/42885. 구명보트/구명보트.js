function solution(people, limit) {
    let answer = 0;
    people.sort((a, b) => b - a);
    
    for(let i = 0; i < people.length; i++) {
        if(people[i] + people[people.length - 1] <= limit){
            people.pop();
            answer++;
        } else {
            answer++;
        }
    }

    return answer;
}