function solve(num) {

    let sum = 0;
    for (let i = 1; i <= num; i++) {
        sum += 2 * i;
    }
    console.log(sum);

}

solve(3);
solve(5);
solve(1);
solve(0);
solve(10);

