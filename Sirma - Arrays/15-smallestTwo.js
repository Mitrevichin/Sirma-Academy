function solve(arr) {

    let sorted = arr.sort((a, b) => a - b);
    console.log(sorted.slice(0, 2));

}

solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);