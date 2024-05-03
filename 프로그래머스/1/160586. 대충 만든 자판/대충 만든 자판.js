function solution(keymap, targets) {
  const result = [];

  for (const target of targets) {
    let count = 0;
    let isFound = false;

    for (let i = 0; i < target.length; i++) {
      const char = target[i];
      let minPress = Infinity;

      for (let j = 0; j < keymap.length; j++) {
        const key = keymap[j];
        const index = key.indexOf(char);
        if (index !== -1 && index + 1 < minPress) {
          minPress = index + 1;
        }
      }

      if (minPress === Infinity) {
        count = -1;
        isFound = false;
        break;
      }

      count += minPress;
      isFound = true;
    }

    result.push(isFound ? count : -1);
  }

  return result;
}
