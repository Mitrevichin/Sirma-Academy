function solve(k, arr) {

    let firstK = arr.slice(0, k).join(' ');
    let lastK = arr.slice(-k).join(' ');

    console.log(`${firstK}\n${lastK}`);

}

solve(2, [7, 8, 9]);
solve(3, [6, 7, 8, 9]);