function solution(n, works) {
    // 작업량이 없다면 0을 반환
    if (works.length === 0) {
        return 0;
    }
    
    // 최대 힙을 구현하기 위해 작업량 배열을 최대 힙으로 변환
    function heapify(arr) {
        const heap = [0]; // 인덱스 0은 사용하지 않음
        for (let i = 0; i < arr.length; i++) {
            heap.push(arr[i]);
            let current = heap.length - 1;
            while (current > 1) {
                const parent = Math.floor(current / 2);
                if (heap[parent] >= heap[current]) break;
                [heap[parent], heap[current]] = [heap[current], heap[parent]];
                current = parent;
            }
        }
        return heap;
    }
    
    // 최대 힙에서 최댓값을 하나씩 꺼내면서 n만큼 감소시킴
    const maxHeap = heapify(works);
    while (n > 0) {
        const max = maxHeap[1];
        if (max === 0) break; // 작업량이 모두 0일 경우 종료
        maxHeap[1]--; // 최대 힙에서 최댓값을 1 감소시킴
        n--; // 남은 작업 시간을 1 감소시킴
        let current = 1;
        while (true) {
            const left = current * 2;
            const right = current * 2 + 1;
            let largest = current;
            if (left < maxHeap.length && maxHeap[left] > maxHeap[largest]) {
                largest = left;
            }
            if (right < maxHeap.length && maxHeap[right] > maxHeap[largest]) {
                largest = right;
            }
            if (largest === current) break;
            [maxHeap[current], maxHeap[largest]] = [maxHeap[largest], maxHeap[current]];
            current = largest;
        }
    }
    
    // 야근 피로도 계산
    let fatigue = 0;
    for (let i = 1; i < maxHeap.length; i++) {
        fatigue += maxHeap[i] ** 2;
    }
    
    return fatigue;
}
