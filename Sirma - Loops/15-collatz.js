function solve(num) {
    console.log(num);

    while (num !== 1) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num = num * 3 + 1;
        }
        console.log(num);
    }
}

solve(6);
solve(12);
solve(9);
solve(200);
solve(15);
