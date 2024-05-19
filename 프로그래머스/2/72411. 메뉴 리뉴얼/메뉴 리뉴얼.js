function solution(orders, course) {
    const getCombinations = (arr, length) => {
        const result = [];
        const f = (prefix, rest) => {
            if (prefix.length === length) {
                result.push(prefix);
                return;
            }
            for (let i = 0; i < rest.length; i++) {
                f(prefix + rest[i], rest.slice(i + 1));
            }
        };
        f('', arr);
        return result;
    };

    const answer = [];

    course.forEach((num) => {
        const combinations = {};
        
        orders.forEach((order) => {
            const sortedOrder = order.split('').sort();
            const combos = getCombinations(sortedOrder.join(''), num);
            combos.forEach((combo) => {
                if (combinations[combo]) {
                    combinations[combo]++;
                } else {
                    combinations[combo] = 1;
                }
            });
        });

        const maxCount = Math.max(...Object.values(combinations));
        if (maxCount >= 2) {
            Object.keys(combinations).forEach((key) => {
                if (combinations[key] === maxCount) {
                    answer.push(key);
                }
            });
        }
    });

    return answer.sort();
}
