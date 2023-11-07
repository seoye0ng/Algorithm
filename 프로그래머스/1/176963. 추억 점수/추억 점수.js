function solution(name, yearning, photo) {
    const people = {};

    for (let i = 0; i < name.length; i++) {
        people[name[i]] = yearning[i];
    }

    const answer = photo.map(allPerson => {
        let memory = 0;

        for (const key of Object.keys(people)) {
            if (allPerson.includes(key)) memory += people[key];
        }

        return memory;
    });

    return answer;
}