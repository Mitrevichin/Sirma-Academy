function findPaymentCombinations(numCoins1lv, numCoins2lv, numBanknotes5lv, targetAmount) {

    for (let i = 0; i <= numCoins1lv; i++) {
        for (let j = 0; j <= numCoins2lv; j++) {
            for (let k = 0; k <= numBanknotes5lv; k++) {
                let sum = i + 2 * j + 5 * k;
                if (sum === targetAmount) {
                    console.log(`${i} * 1 lv. + ${j} * 2 lv. + ${k} * 5 lv. = ${sum} lv.`);
                }
            }
        }
    }
}

findPaymentCombinations(3, 2, 3, 10);
