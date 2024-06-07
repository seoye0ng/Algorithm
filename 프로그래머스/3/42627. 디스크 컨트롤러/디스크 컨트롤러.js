function solution(jobs) {
    jobs.sort((a, b) => a[0] - b[0]); // 요청 시간이 빠른 순서대로 정렬
    const pq = []; // 우선순위 큐
    let currentTime = 0;
    let totalWaitTime = 0;
    let jobIndex = 0;
    let jobsProcessed = 0;
    const numJobs = jobs.length;
    
    while (jobsProcessed < numJobs) {
        // 현재 시간까지 도착한 작업들을 우선순위 큐에 넣기
        while (jobIndex < numJobs && jobs[jobIndex][0] <= currentTime) {
            pq.push(jobs[jobIndex]);
            pq.sort((a, b) => a[1] - b[1]); // 소요 시간이 짧은 순서대로 정렬
            jobIndex++;
        }

        if (pq.length > 0) {
            // 현재 시간에서 소요 시간이 가장 짧은 작업을 처리
            const [start, duration] = pq.shift();
            currentTime += duration;
            totalWaitTime += currentTime - start;
            jobsProcessed++;
        } else {
            // 처리할 작업이 없으면 시간을 다음 작업의 요청 시간으로 이동
            if (jobIndex < numJobs) {
                currentTime = jobs[jobIndex][0];
            }
        }
    }
    
    return Math.floor(totalWaitTime / numJobs);
}
