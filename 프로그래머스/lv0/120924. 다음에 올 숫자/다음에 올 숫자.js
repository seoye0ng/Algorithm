function solution(common) {
     if (common.length < 2) {
    // common 배열의 길이가 2보다 작으면 다음 숫자를 결정할 수 없음
    return null;
  }

  if (common[1] - common[0] === common[common.length - 1] - common[common.length - 2]) {
    // 등차수열인 경우
    const diff = common[1] - common[0];
    return common[common.length - 1] + diff;
  } else if (common[1] / common[0] === common[common.length - 1] / common[common.length - 2]) {
    // 등비수열인 경우
    const ratio = common[1] / common[0];
    return common[common.length - 1] * ratio;
  } else {
    // 등차수열도 등비수열도 아닌 경우
    return null;
  }
}