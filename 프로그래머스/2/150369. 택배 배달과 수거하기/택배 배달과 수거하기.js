function solution(cap, n, deliveries, pickups) {
    let distance = 0;
    
    // 배달과 수거의 현재 남아있는 양을 나타내는 변수
    let deliveryLeft = 0;
    let pickupLeft = 0;
    
    for (let i = n - 1; i >= 0; i--) {
        deliveryLeft += deliveries[i];
        pickupLeft += pickups[i];
        
        // 트럭이 한 번의 왕복으로 처리해야 하는 경우
        while (deliveryLeft > 0 || pickupLeft > 0) {
            deliveryLeft -= cap;
            pickupLeft -= cap;
            distance += (i + 1) * 2;
        }
    }
    
    return distance;
}
