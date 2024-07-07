function solve(n) {

    let currentNumber = 1;

    for (let i = 1; currentNumber <= n; i++) {
        let row = '';

        for (let j = 1; j <= i; j++) {
            if (currentNumber > n) break;
            row += currentNumber + ' ';
            currentNumber++;
        }

        console.log(row);
    }
}

solve(7);
// solve(10);
// solve(15);