function solution(record) {
    const users = {}; // 유저의 ID와 닉네임을 저장하는 객체

    // 각 유저의 ID와 닉네임을 저장
    record.forEach(rec => {
        const [action, userId, nickname] = rec.split(' ');
        if (action === 'Enter' || action === 'Change') {
            users[userId] = nickname;
        }
    });

    // 최종적인 채팅방 메시지 생성
    const messages = [];
    record.forEach(rec => {
        const [action, userId, _] = rec.split(' ');
        if (action === 'Enter') {
            messages.push(`${users[userId]}님이 들어왔습니다.`);
        } else if (action === 'Leave') {
            messages.push(`${users[userId]}님이 나갔습니다.`);
        }
    });

    return messages;
}
