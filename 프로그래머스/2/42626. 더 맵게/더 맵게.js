class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        const poppedValue = this.heap[0];
        const lastValue = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = lastValue;
            this.heapifyDown();
        }

        return poppedValue;
    }

    heapifyUp() {
        let currentIndex = this.heap.length - 1;

        while (currentIndex > 0) {
            const parentIndex = Math.floor((currentIndex - 1) / 2);

            if (this.heap[parentIndex] <= this.heap[currentIndex]) {
                break;
            }

            [this.heap[parentIndex], this.heap[currentIndex]] = [this.heap[currentIndex], this.heap[parentIndex]];
            currentIndex = parentIndex;
        }
    }

    heapifyDown() {
        let currentIndex = 0;

        while (true) {
            const leftChildIndex = 2 * currentIndex + 1;
            const rightChildIndex = 2 * currentIndex + 2;
            let smallestChildIndex = currentIndex;

            if (leftChildIndex < this.heap.length && this.heap[leftChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.heap.length && this.heap[rightChildIndex] < this.heap[smallestChildIndex]) {
                smallestChildIndex = rightChildIndex;
            }

            if (currentIndex === smallestChildIndex) {
                break;
            }

            [this.heap[currentIndex], this.heap[smallestChildIndex]] = [this.heap[smallestChildIndex], this.heap[currentIndex]];
            currentIndex = smallestChildIndex;
        }
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }
}

function solution(scoville, K) {
    let answer = 0;
    const heap = new MinHeap();

    // 초기 음식을 모두 힙에 추가
    scoville.forEach(value => heap.push(value));

    while (heap.size() > 1 && heap.peek() < K) {
        // 가장 맵지 않은 두 음식을 섞어서 새로운 음식을 만듦
        const newFood = heap.pop() + heap.pop() * 2;

        // 새로운 음식을 힙에 추가
        heap.push(newFood);

        // 섞은 횟수 증가
        answer++;
    }

    // 모든 음식의 스코빌 지수가 K 이상이 되지 않는 경우
    if (heap.size() === 1 && heap.peek() < K) {
        return -1;
    }

    return answer;
}
