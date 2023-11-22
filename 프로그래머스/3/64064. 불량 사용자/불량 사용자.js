function solution(user_id, banned_id) {
    const answer = new Set(); // 들어온 문자열들 중복 제거
    const check = new Array(user_id.length).fill(false);

    function match(str1, str2) {
        if (str1.length !== str2.length) return false;
        for (let i = 0; i < str1.length; i++) {
            if (str2[i] === '*') continue;
            if (str1[i] !== str2[i]) return false;
        }
        return true;
    }

    function dfs(count, map) {
        if (count === banned_id.length) {
            answer.add([...map].sort().join('')); // 하나의 문자열로 합치기
            return;
        }
        for (let i = 0; i < user_id.length; i++) {
            if (check[i]) continue;
            if (match(user_id[i], banned_id[count])) {
                check[i] = true;
                dfs(count + 1, [...map, user_id[i]]);
                check[i] = false; // 방금 매칭했던 user_id[i]의 사용 표시를 해제
                // 이는 같은 user_id를 다른 banned_id에 매칭하는 것을 방지하기 위함
            }
        }
    }

    dfs(0, []);
  
    return answer.size;
}