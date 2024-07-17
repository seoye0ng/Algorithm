function solution(enroll, referral, seller, amount) {
    // 판매원의 이름을 인덱스로 매핑하는 객체
    const nameToIndex = {};
    for (let i = 0; i < enroll.length; i++) {
        nameToIndex[enroll[i]] = i;
    }

    // 각 판매원의 추천인을 저장하는 객체
    const referralMap = {};
    for (let i = 0; i < enroll.length; i++) {
        referralMap[enroll[i]] = referral[i];
    }

    // 각 판매원의 이익을 저장하는 배열
    const profit = new Array(enroll.length).fill(0);

    function distributeProfit(name, profitAmount) {
        if (name === "-" || profitAmount === 0) {
            return;
        }
        const idx = nameToIndex[name];
        const myShare = profitAmount - Math.floor(profitAmount / 10);
        profit[idx] += myShare;
        distributeProfit(referralMap[name], Math.floor(profitAmount / 10));
    }

    // 판매 기록을 처리
    for (let i = 0; i < seller.length; i++) {
        const totalProfit = amount[i] * 100;
        distributeProfit(seller[i], totalProfit);
    }

    return profit;
}
