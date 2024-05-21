function solution(book_time) {
    // 시간을 분으로 변환하는 함수
    const timeToMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    // 각 예약 시간을 분으로 변환하고 정렬
    let times = book_time.map(([start, end]) => [timeToMinutes(start), timeToMinutes(end) + 10]);
    times.sort((a, b) => a[0] - b[0]);

    // 우선순위 큐를 사용하여 현재 사용 중인 객실의 퇴실 시간을 관리
    const pq = [];
    let rooms = 0;

    for (const [start, end] of times) {
        // 가장 빠른 퇴실 시간을 가진 객실을 큐에서 제거
        while (pq.length > 0 && pq[0] <= start) {
            pq.shift();
        }

        // 현재 예약을 큐에 추가
        pq.push(end);
        pq.sort((a, b) => a - b); // 우선순위 큐 정렬

        // 필요한 객실 수 갱신
        rooms = Math.max(rooms, pq.length);
    }

    return rooms;
}
