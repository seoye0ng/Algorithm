function solution(name, yearning, photo) {
    const answer = [];
    const people = {};
    
    for(let i = 0; i < name.length; i++){
        people[name[i]] = yearning[i]
    }
    
    photo.forEach(allPerson => {
        let memory = 0;
        
        Object.entries(people).forEach(([key, value]) => {
            if(allPerson.includes(key)) memory += value;
        })
        
        answer.push(memory);
    })
    
    return answer;
}