function solution(skill, skill_trees) {
    // 가능한 스킬트리 개수를 담을 변수 초기화
    let count = 0;
    
    // 주어진 각 스킬트리를 순회하면서 검사
    for (let i = 0; i < skill_trees.length; i++) {
        let index = 0;
        let valid = true;
        
        // 현재 스킬트리에서 각 스킬이 선행 스킬 순서를 지키는지 검사
        for (let j = 0; j < skill_trees[i].length; j++) {
            if (skill.includes(skill_trees[i][j])) {
                // 현재 스킬이 선행 스킬 순서에 있으면 순서가 맞는지 검사
                if (skill[index] === skill_trees[i][j]) {
                    index++;
                } else {
                    // 순서가 맞지 않으면 불가능한 스킬트리로 판단
                    valid = false;
                    break;
                }
            }
        }
        
        // 가능한 스킬트리인 경우 count 증가
        if (valid) {
            count++;
        }
    }
    
    return count;
}