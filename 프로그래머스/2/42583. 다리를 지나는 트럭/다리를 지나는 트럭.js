function solution(bridge_length, weight, truck_weights) {
    let sec = 0; 
    let sum = 0; 
    const passing = []; 
    
    while (truck_weights.length || passing.length) { 
        if (weight >= sum + truck_weights[0] && passing.length <= bridge_length) { 
            const truck = truck_weights.shift(); 
            sum += truck; 
            passing.push([truck, sec + bridge_length]); 
            sec++;
        } else { 
            const [truck, passedSec] = passing.shift();
            if (sec < passedSec) { 
                sec = passedSec; 
            }
            sum -= truck;
        }
    }

    return sec + 1; 
}