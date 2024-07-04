function makeupProfit(renovationPrice, powders, lipsticks, spirals, shadows, correctors) {
    const powderPrice = 2.60;
    const lipstickPrice = 3;
    const spiralPrice = 4.10;
    const shadowPrice = 8.20;
    const concealerPrice = 2;

    let totalPrice = powders * powderPrice +
        lipsticks * lipstickPrice +
        spirals * spiralPrice +
        shadows * shadowPrice +
        correctors * concealerPrice;

    let totalCount = powders + lipsticks + spirals + shadows + correctors;
    let discount = 0;
    if (totalCount >= 50) {
        discount = 0.25 * totalPrice;
    }

    totalPrice -= discount;

    let rent = 0.1 * totalPrice;

    let profit = totalPrice - rent;

    let remainingMoney = profit - renovationPrice;

    if (remainingMoney >= 0) {
        console.log(`Yes! ${remainingMoney.toFixed(2)} BGN left.`);
    } else {
        console.log(`Not enough money! ${Math.abs(remainingMoney).toFixed(2)} BGN needed.`);
    }
}

makeupProfit(40.8, 20, 25, 30, 50, 10);


