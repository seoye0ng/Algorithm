function solution(routes) {
  // 차량의 진출 지점을 기준으로 오름차순 정렬
  routes.sort((a, b) => a[1] - b[1]);

  let cameras = 0; // 설치된 카메라 개수
  let lastCamera = -30001; // 마지막으로 설치된 카메라의 위치

  for (let route of routes) {
    // 현재 설치된 카메라로 감시할 수 있는 차량은 건너뛰기
    if (route[0] > lastCamera) {
      // 새로운 카메라 설치
      cameras++;
      lastCamera = route[1];
    }
  }

  return cameras;
}
