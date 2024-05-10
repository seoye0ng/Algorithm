function solution(N, stations, W) {
  let answer = 0;
  let idx = 0;
  let start = 1;

  while (start <= N) {
    if (idx < stations.length && start >= stations[idx] - W) {
      start = stations[idx] + W + 1;
      idx++;
    } else {
      start += 2 * W + 1;
      answer++;
    }
  }

  return answer;
}
