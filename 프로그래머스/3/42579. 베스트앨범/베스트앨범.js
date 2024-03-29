function solution(genres, plays) {
    const answer = [];
    const genresObj = {};
    const playsObj = {};
    
    for(let i = 0; i < genres.length; i++) {
        if(genresObj[genres[i]]) genresObj[genres[i]] += plays[i];
        else genresObj[genres[i]] = plays[i];
        
        if(playsObj[genres[i]]) playsObj[genres[i]].push([plays[i] , i]);
        else playsObj[genres[i]] = [[plays[i] , i]];
    }
    
    const genresSort = Object.entries(genresObj).sort((a, b) => b[1] - a[1]);
    
    genresSort.forEach(music => {
        const playSort = playsObj[music[0]].sort((a, b) => b[0] - a[0]);
        for(let i = 0; i < 2; i++) {
            answer.push(playsObj[music[0]][i][1])
            if(playsObj[music[0]].length === 1) break;
        }
    })

    return answer;
}