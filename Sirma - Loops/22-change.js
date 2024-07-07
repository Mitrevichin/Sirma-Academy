function change(amount) {
    let coinsCount = 0;

    amount *= 100;

    const coins = [200, 100, 50, 20, 5, 2, 1];

    coins.forEach(coin => {
        while (amount >= coin) {
            amount -= coin;
            coinsCount++;
        }
    });

    console.log(coinsCount);
}

change(1.23);
change(2);
change(0.56);
change(2.73);
