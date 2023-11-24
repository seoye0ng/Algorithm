function solution(m, musicinfos) {
    const match = [];
    
    for(let i = 0; i < musicinfos.length; i++) {
        const [start, end, title, melody] = musicinfos[i].split(',');
        const startMin = start.split(':')[0] * 60 + start.split(':')[1] * 1;
        const endMin = end.split(':')[0] * 60 + end.split(':')[1] * 1;
        const time = endMin - startMin;
        
        let fullMelody = changeMelody(melody);
        const listenMelody = changeMelody(m)
        
        while(fullMelody.length < time) {
            fullMelody += fullMelody;
        }
        
        if(fullMelody.length > time) fullMelody = fullMelody.substr(0, time);
        if(fullMelody.indexOf(listenMelody) !== -1) match.push([title, time, i]);
    }
    
    if(match.length > 1){
         match.sort((a, b) => {
            if (a[1] !== b[1]) return b[1] - a[1]; // 재생 시간이 긴 순서로 정렬
            return a[2] - b[2];  // 재생 시간이 같다면 먼저 입력된 순서대로 정렬
        });
    }
   
    console.log(match)
    return match.length > 0 ? match[0][0] : '(None)';
}

// #을 제거하고 음 변경하기
function changeMelody(melody) {
    let newMelody = '';
    
    for(let i = 0; i < melody.length; i++){
        if(i < melody.length - 1 && melody[i + 1] === '#') {
            newMelody += melody[i].toLowerCase();
            i++; // '#' 문자를 건너뛰기
        } else {
            newMelody += melody[i];
        }
    }
    
    return newMelody;
}